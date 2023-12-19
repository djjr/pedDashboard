const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
//const Tag = require('../models/Tag'); // Require if you're manipulating tags
//const Reference = require('../models/Reference'); // Require if needed

const Joi = require('joi');

const questionSchema = Joi.object({
  text: Joi.string().required(),
  type: Joi.string().valid('multiple-choice', 'fill-in-the-blank', 'short-answer', 'essay', 'code').required(),
  difficulty: Joi.string().valid('easy', 'medium', 'hard'),
  options: Joi.when('type', { is: 'multiple-choice', then: Joi.array().items(Joi.string()).required() }),

  //correctAnswer: Joi.when('type', { is: Joi.not('essay').and(Joi.not('code')), then: Joi.required() }),

  correctAnswer: Joi.alternatives().conditional('type', { 
    is: Joi.string().valid('essay', 'code'), 
    then: Joi.forbidden(), 
    otherwise: Joi.required() 
  }),

  modelAnswer: Joi.when('type', { is: Joi.any().valid('essay', 'code'), then: Joi.string().required() }),
  feedBack: Joi.string(),
  tags: Joi.array().items(Joi.string()), // Assuming tags are strings here
  references: Joi.array().items(Joi.object({
    title: Joi.string().required(),
    url: Joi.string().required(),
    detail: Joi.string()
  }))
});


// POST - Create a new question
router.post('/', async (req, res) => {
    console.log(req.body);
    const { error, value } = questionSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        let tags = [];

        // Proceed only if tags are provided
        if (req.body.tags && req.body.tags.length > 0) {
            const tagNames = req.body.tags;
            tags = await Promise.all(tagNames.map(async (name) => {
                let tag = await Tag.findOne({ name });
                if (!tag) {
                    tag = new Tag({ name });
                    await tag.save();
                }
                return tag._id;
            }));
        }

        let referenceIds = [];
        if (req.body.references && req.body.references.length > 0) {
            referenceIds = await Promise.all(req.body.references.map(async (ref) => {
                let reference = await Reference.findOne({ url: ref.url });
                if (!reference) {
                    reference = new Reference({
                        title: ref.title,
                        url: ref.url,
                        detail: ref.detail
                    });
                    await reference.save();
                }
                return reference._id;
            }));
        }

        // Create the new question with Tag IDs
        const newQuestion = new Question({
            ...req.body,
            tags: tags,
            references: referenceIds
        });
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    });





// GET - Retrieve a question by ID or all questions if no ID is provided
router.get('/:id?', async (req, res) => {
    try {
        if (req.params.id) {
            const question = await Question.findById(req.params.id).populate('tags references');
            if (!question) return res.status(404).send('Question not found');
            return res.json(question);
        } else {
            const questions = await Question.find().populate('tags references');
            res.json(questions);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE - Delete a question by ID
router.delete('/:id', async (req, res) => {
    try {
        const question = await Question.findByIdAndDelete(req.params.id);
        if (!question) return res.status(404).send('Question not found');
        res.json({ message: 'Question deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT - Update a question by ID
router.put('/:id', async (req, res) => {
    const { error, value } = questionSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        let tags = [];

        // Process tags if they are provided
        if (req.body.tags && req.body.tags.length > 0) {
            const tagNames = req.body.tags;
            tags = await Promise.all(tagNames.map(async (name) => {
                let tag = await Tag.findOne({ name });
                if (!tag) {
                    tag = new Tag({ name });
                    await tag.save();
                }
                return tag._id;
            }));
        }

        // Process references
        let referenceIds = [];
        if (req.body.references && req.body.references.length > 0) {
            referenceIds = await Promise.all(req.body.references.map(async (ref) => {
                let reference = await Reference.findOne({ url: ref.url });
                if (!reference) {
                    reference = new Reference({
                        title: ref.title,
                        url: ref.url,
                        detail: ref.detail
                    });
                    await reference.save();
                }
                return reference._id;
            }));
        }

        // Update the question
        const updateData = {
            ...req.body,
            tags: tags, // include the processed tags
            references: referenceIds
        };

        const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedQuestion) return res.status(404).send('Question not found');
        res.json(updatedQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
