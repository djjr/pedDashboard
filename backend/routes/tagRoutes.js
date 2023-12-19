const express = require('express');
const router = express.Router();
const Tag = require('../models/Tag');

  const Joi = require('joi');

  const tagSchema = Joi.object({
    name: Joi.string().required()
  });


// POST - Create a new tag
router.post('/', async (req, res) => {
    try {
        const newTag = new Tag(req.body);
        const savedTag = await newTag.save();
        res.status(201).json(savedTag);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET - Retrieve a tag by ID (or return all tags)
router.get('/:id?', async (req, res) => {
    try {
        if (req.params.id) {
            const tag = await Tag.findById(req.params.id);
            if (!tag) return res.status(404).send(`Tag with id ${req.params.id} not found.`);
            res.json(tag);
        } else {
            const tags = await Tag.find();//.populate('tags references');
            res.json(tags);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});





// DELETE - Delete a tag by ID
router.delete('/:id', async (req, res) => {
    try {
        const tag = await Tag.findByIdAndDelete(req.params.id);
        if (!tag) return res.status(404).send(`Tag with id ${req.params.id} not found.`);
        res.json({ message: 'Tag deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT - Update a tag by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTag) return res.status(404).send('Tag not found');
        res.json(updatedTag);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
