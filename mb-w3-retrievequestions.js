const express = require('express');
const router = express.Router();
const Question = require('./models/question');

// Create a new question
router.post('/questions', async (req, res) => {
  try {
    const { questionText, answer } = req.body;
    const question = new Question({ questionText, answer });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ error: 'Could not create the question.' });
  }
});

// Get a random question for practice
router.get('/practice', async (req, res) => {
  try {
    const randomQuestion = await Question.aggregate([{ $sample: { size: 1 } }]);
    res.json(randomQuestion[0]);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch a question.' });
  }
});

module.exports = router;
