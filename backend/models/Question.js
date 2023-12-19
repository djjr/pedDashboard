const mongoose = require('mongoose');

const Tag = require('./Tag'); // requiring the Tag model
const Reference = require('./Reference'); // requiring the Tag model

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: { type: String, required: true },
  type: { 
    type: String, 
    required: true, 
    enum: ['multiple-choice', 'fill-in-the-blank', 'short-answer', 'essay', 'code'] 
  },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'] },
  options: {
    type: Schema.Types.Mixed,
    required: function() { return this.type === 'multiple-choice'; }
  },
  correctAnswer: {
    type: Schema.Types.Mixed,
    required: function() { return this.type !== 'essay' && this.type !== 'code'; }
  },
  modelAnswer: {
    type: String,
    required: function() { return this.type === 'essay' || this.type === 'code'; }
  },
  feedBack: { // DJR: link to table of feedback? Or hook to AI generated feedback? Or user rated feedback scheme?
     type: String
  },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  references: [{ type: Schema.Types.ObjectId, ref: 'Reference' }]
  //specificReferences: [{ type: Schema.Types.ObjectId, ref: 'SpecificReference' }]
});

// Create the model from the schema
const Question = mongoose.model('Question', questionSchema);

// Export the model
module.exports = Question;
