// The API for question bank and notes

// TO DO LIST
// In routes/reference : ... Other route handlers for GET, PUT, DELETE ...
// In routes/notes PUT query parameter changed to noteId. Make sure compatible with frontend
// Make sure all frontend API calls use /api/routename



const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// const referenceMaterialRoutes = require('./routes/referenceMaterialRoutes');
// const specificReferenceRoutes = require('./routes/specificReferenceRoutes');
// const tagRoutes = require('./routes/tagRoutes');
// Requiring our routes
const noteRoutes = require('./routes/noteRoutes');
const tagRoutes = require('./routes/tagRoutes');
const deckRoutes = require('./routes/deckRoutes');
const referenceRoutes = require('./routes/referenceRoutes');
const questionRoutes = require('./routes/questionRoutes');

app.use(cors());
app.use(express.json());


// Using our routes
app.use('/api/notes', noteRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/decks', deckRoutes);
app.use('/api/references', referenceRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/questions', questionRoutes);


//mongoose.connect('mongodb+srv://dan:OG5ibRvGXAMRFM5q@cluster0.ifwoswo.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect('mongodb+srv://dan:OG5ibRvGXAMRFM5q@cluster0.ifwoswo.mongodb.net/?retryWrites=true&w=majority')
  .catch(err => console.error('Could not connect to MongoDB', err));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
