const express = require('express');
const animalController = require('../controllers/animal_controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Animal:
 *       type: object
 *       required:
 *         - Id 
 *         - Name
 *         - AnimalType
 *         - IsMale
 *         - Age
 *         - AgeUnit
 *         - Fur
 *         - Breed
 *         - Description
 *         - ImageURL
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of an animal
 *         Name:
 *           type: string
 *           description: The animal's name
 *         AnimalType:
 *           type: integer
 *           description: The type of animal (1 for cat, 2 for dog)
 *         IsMale:
 *           type: boolean
 *           description: The animal's gender
 *         Age:
 *           type: integer
 *           description: The animal's age
 *         AgeUnit:
 *           type: string
 *           description: The animal's age unit
 *         Fur:
 *           type: string
 *           description: The animal's fur colour
 *         Breed:
 *           type: string
 *           description: The animal's breed
 *         Description:
 *           type: string
 *           description: The animal's description
 *         ImageURL:
 *           type: string
 *           description: Link to the animals Image
 *       example:
 *         Id: 1
 *         Name: Neumann
 *         AnimalType: 1
 *         IsMale: true
 *         Age: 7
 *         AgeUnit: Months
 *         Fur: Black
 *         Breed: Maine Coon
 *         Description: Neumann, our little lion, a glorious pitch black maine coon kitten who recently turned 7 months old
 *         ImageURL: http://localhost:3000/img/neumann.jpg
 */

/**
 * @swagger
 * /animals:
 *   get:
 *     summary: Lists all animals
 *     responses:
 *       200:
 *         description: A list of animals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Animal'
 */
router.get('/', animalController.listAllAnimals);

/**
 * @swagger
 * /animals/{animalTypeId}:
 *   get:
 *     summary: Gets all animals by certain type
 *     parameters:
 *       - in: path
 *         name: animalTypeId
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: A list of animals with specific type
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Animal'
 */
router.get('/:animalTypeId', animalController.getAnimalsByType);

/**
 * @swagger
 * /animals/{animalId}:
 *   get:
 *     summary: Retrieves an animal based on their ID
 *     parameters:
 *       - in: path
 *         name: animalId
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: An animal object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 */
router.get('/:animalId', animalController.getAnimalById);

/**
 * @swagger
 * /animals:
 *   post:
 *     summary: Creates an animal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Animal'
 *     responses:
 *       201:
 *         description: The created animal object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 */
router.post('/', animalController.createAnimal);

/**
 * @swagger
 * /animals/{animalId}:
 *   put:
 *     summary: Updates an animal by their ID
 *     parameters:
 *       - in: path
 *         name: animalId
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Animal'
 *     responses:
 *       200:
 *         description: The updated animal object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 */
router.put('/:animalId', animalController.updateAnimal);

/**
 * @swagger
 * /animals/{animalId}:
 *   delete:
 *     summary: Deletes an animal based on their ID
 *     parameters:
 *       - in: path
 *         name: animalId
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The deleted animal object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 */
router.delete('/:animalId', animalController.deleteAnimal);

module.exports = router;
