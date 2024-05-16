const fs = require('fs/promises');
const path = require('path');
const { Mutex } = require('async-mutex');
const dotenv = require('dotenv');

dotenv.config();
const filePath = path.join(__dirname, 'animals.json');
console.log(filePath)
const mutex = new Mutex();

let animals = [];

// Load existing data from file on startup if enabled
async function loadDataFromFile() {
    if (process.env.USE_FILE_STORAGE === 'true') {
        try {
            const data = await fs.readFile(filePath, { encoding: 'utf8' });
            animals = JSON.parse(data);
            console.log('Data loaded from file.');
        } catch (error) {
            console.error('Failed to load data from file:', error);
            animals = [];
        }
    }
}

// Save data to file
async function saveDataToFile() {
    if (process.env.USE_FILE_STORAGE === 'true') {
        const release = await mutex.acquire();
        try {
            await fs.writeFile(filePath, JSON.stringify(animals, null, 2));
            console.log('Data saved to file.');
        } catch (error) {
            console.error('Failed to save data:', error);
        } finally {
            release();
        }
    }
}

// Periodic save to file, e.g., every 10 minutes
setInterval(async () => {
    await saveDataToFile();
}, 600000); // 10 minutes in milliseconds

// Save before shutdown
process.on('SIGINT', async () => {
    await saveDataToFile();
    process.exit();
});

// CRUD operations
function listAllAnimals() {
    return animals;
}

function getAnimalById(animalId) {
    return animals.find(a => a.id === animalId);
}

function createAnimal(newAnimal) {
    newAnimal.id = animals.length + 1;
    animals.push(newAnimal);
    saveDataToFile();  // Save on modification
    return newAnimal;
}

function updateAnimal(animalId, updatedAnimal) {
    const index = animals.findIndex(a => a.id === animalId);
    if (index !== -1) {
        animals[index] = { ...animals[index], ...updatedAnimal };
        saveDataToFile();  // Save on modification
        return animals[index];
    }
    return null;
}

function deleteAnimal(animalId) {
    const index = animals.findIndex(a => a.id === animalId);
    if (index !== -1) {
        const [deletedAnimal] = animals.splice(index, 1);
        saveDataToFile();  // Save on modification
        return deletedAnimal;
    }
    return null;
}

module.exports = {
    listAllAnimals,
    getAnimalById,
    createAnimal,
    updateAnimal,
    deleteAnimal
};

loadDataFromFile();