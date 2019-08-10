const express = require('express');
const knex = require('knex');

const db = require('../data/db-config.js');

const router = express.Router();
// get get:id post
router.get('/', async (req, res) => {
    try {
        const cars = await db('cars');
        res.status(200).json(cars);
    } catch(err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const car = await db('cars').where({id});
        res.status(200).json(car);
    } catch(err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const [ id ] = await db('cars').insert(req.body);
        const newCarEntry = await db('cars').where({id});
        res.status(201).json(newCarEntry);
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('going in')
        const updatedCar = await db('cars').where({id}).update(req.body);
        res.status(200).json(updatedCar);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const carDeletedConfirmation = await db('cars').where({id}).del();
        res.status(200).json(carDeletedConfirmation);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;

