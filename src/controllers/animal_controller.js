const animalsDomain = require('../domain/animals');

exports.listAllAnimals = (req, res) => {
    res.json(animalsDomain.listAllAnimals());
};

exports.getAnimalById = (req, res) => {
    const bookId = parseInt(req.params.bookId, 10);
    const book = animalsDomain.getAnimalById(bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send({ message: 'Animal not found' });
    }
};

exports.createAnimal = (req, res) => {
    const newBook = animalsDomain.createAnimal(req.body);
    res.status(201).json(newBook);
};

exports.updateAnimal = (req, res) => {
    const bookId = parseInt(req.params.bookId, 10);
    const updatedAnimal = animalsDomain.updateAnimal(bookId, req.body);

    if (updatedAnimal) {
        res.json(updatedAnimal);
    } else {
        res.status(404).send({ message: 'Animal not found' });
    }
};

exports.deleteAnimal = (req, res) => {
    const bookId = parseInt(req.params.bookId, 10);
    const deletedAnimal = animalsDomain.deleteAnimal(bookId);

    if (deletedAnimal) {
        res.json(deletedAnimal);
    } else {
        res.status(404).send({ message: 'Animal not found' });
    }
};

