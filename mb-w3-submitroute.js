const express = require('express');
const router = express.Router();
const Question = require('./models/question');

// Create a new question
router.post('/questions', async (req, res) => {
  try {
    const { title, body } = req.body;
    const question = new Question({ title, body });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ error: 'Could not create the question.' });
  }
});

module.exports = router;
