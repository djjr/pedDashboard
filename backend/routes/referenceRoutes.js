const express = require('express');
const router = express.Router();
const Reference = require('../models/Reference');

const Joi = require('joi');

const referenceSchema = Joi.object({
  title: Joi.string().required(),
  url: Joi.string().uri().required(),
  detail: Joi.string() // Optional
});

// POST - Create a new reference
router.post('/', async (req, res) => {
    const { error, value } = referenceSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const newReference = new Reference(req.body);
        const savedReference = await newReference.save();
        res.status(201).json(savedReference);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// ... Other route handlers for GET, PUT, DELETE ...

// GET one reference by ID or all references
// GET - Retrieve a question by ID or all questions if no ID is provided
router.get('/:id?', async (req, res) => {
    try {
        if (req.params.id) {
            const reference = await Reference.findById(req.params.id);//.populate('tags references');
            if (!reference) return res.status(404).send('Reference not found');
            return res.json(reference);
        } else {
            const references = await Reference.find();//.populate('tags references');
            res.json(references);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
