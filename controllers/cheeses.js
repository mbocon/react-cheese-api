const express = require('express');

const cheesesRouter = express.Router();

const Cheese = require('../models/Cheese');

// Index Route - Get all cheese from the database 
cheesesRouter.get('/', (req, res) => {
    Cheese.find({}, (err, cheese) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(cheese);
        }
    })
});

// Create Route - Add a new cheese to the database
cheesesRouter.post('/', (req, res) => { 
    Cheese.create(req.body, (err, cheese) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(cheese);
        }
    })
});

// Read/Show Route - Get a single cheese from the database
cheesesRouter.get('/:id', (req, res) => {
    Cheese.findById(req.params.id, (err, cheese) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(cheese);
        }
    })
});

// Update Route - Update a single cheese in the database
cheesesRouter.put('/:id', (req, res) => {
    Cheese.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, cheese) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).redirect(`/api/cheese/${cheese._id}`);
        }
    })
});

// Delete Route - Delete a single cheese from the database
cheesesRouter.delete('/:id', (req, res) => {
    Cheese.findByIdAndDelete(req.params.id, (err, cheese) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).redirect('/api/cheese');
        }
    })
});

module.exports = cheesesRouter;