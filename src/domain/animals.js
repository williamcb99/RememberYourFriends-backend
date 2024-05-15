let animals = [
    {
        Id: 1,
        Name: "Dave the Cheese Wizard",
        AnimalType: 1,
        IsMale: true,
        Age: 4,
        AgeUnit: "Years",
        Fur: "Bicolor",
        Breed: "Domestic Shorthair",
        Description: "Meet Dave the Cheese Wizard, a magnificent 4-year-old feline with a fur coat resembling the contrasting hues of black and white, akin to a painter's masterpiece. But what truly sets Dave apart is his undeniable passion for cheese, earning him the whimsical title of \"the Cheese Wizard.\" His playful antics and curious nature will whisk you away on a magical journey through the land of whiskers and wonder. Whether he's conjuring up dreams of creamy Camembert or enchanting you with his spellbinding charm, Dave the Cheese Wizard is sure to steal your heart and leave you craving more of his cheesy adventures. Come meet him today and embark on a journey filled with love, laughter, and of course, plenty of cheese!"
    },
    {
        Id: 2,
        Name: "Maurice",
        AnimalType: 1,
        IsMale: true,
        Age: 6,
        AgeUnit: "Months",
        Fur: "Tabby",
        Breed: "Domestic Shorthair",
        Description: "Meet Maurice, a handsome young gentleman with the classic stripes of a tabby adorning his fur. At just 6 months old, Maurice is still discovering the world around him, one cautious step at a time.As a shy soul, Maurice prefers the quiet comfort of cozy corners, where he can observe the world with his big, curious eyes. Despite his reserved nature, there's a gentle warmth to Maurice's presence, like a soft breeze on a summer's day.With patience and tender care, Maurice blossoms like a delicate flower, revealing his tender affection and playful spirit to those who take the time to know him. He may start off timid, but once he trusts you, Maurice will grace your life with an abundance of love and loyalty.If you're seeking a companion who understands the beauty of silence and the power of patience, look no further than Maurice. Come meet this precious tabby at the shelter, and together, embark on a journey of gentle companionship and unconditional love."
    }
    // ... other animals ...
];

function listAllAnimals() {
    return animals;
}

function getAnimalById(animalId) {
    return animals.find(a => a.id === animalId);
}

function createAnimal(newAnimal) {
    newAnimal.id = animals.length + 1;  // Simple ID generation
    animals.push(newAnimal);
    return newAnimal;
}

function updateAnimal(animalId, updatedAnimal) {
    const index = animals.findIndex(b => b.id === animalId);

    if (index !== -1) {
        animals[index] = { ...animals[index], ...updatedAnimal };
        return animals[index];
    }
    return null;
}

function deleteAnimal(animalId) {
    const index = animals.findIndex(b => b.id === animalId);
    
    if (index !== -1) {
        return animals.splice(index, 1)[0];
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
