const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'RememberYourFriends API',
      version: '1.0.0',
      description: 'Simple API to manage animals',
    },
    servers: [
      {
        url: `http://localhost:3000/api`,
      },
    ],
  },
  apis: ['./src/routes/*.js'], // path to the API docs
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

const app = express();
app.use(express.static("public"))
app.use(express.json());
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/animals', require('./routes/animal_routes'));
module.exports = app;
