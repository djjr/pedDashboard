const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const referenceSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  detail: { type: String } // Optional field for specific details (page, slide number, etc.)
});

const Reference = mongoose.model('Reference', referenceSchema);

module.exports = Reference;
