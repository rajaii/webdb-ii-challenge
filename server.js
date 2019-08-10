const express = require('express');
const server = express();
const carsRouter = require('./cars/carsRouter.js');

server.use(express.json());
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to the Car Website!</h1>')
});

module.exports = server;

