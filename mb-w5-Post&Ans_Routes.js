const express = require('express');
const router = express.Router();
const UserQuestion = require('../models/userQuestionModel');

// Post a new question
router.post('/postQuestion', async (req, res) => {
  try {
    let newQuestion = new UserQuestion({
      user: req.body.userId,
      question: req.body.question
    });
    await newQuestion.save();
    res.status(201).send(newQuestion);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Expert answer a question
router.post('/answerQuestion/:questionId', async (req, res) => {
  try {
    let question = await UserQuestion.findById(req.params.questionId);
    if (!question) return res.status(404).send("Question not found");
    
    question.answer = req.body.answer;
    question.answeredBy = req.body.expertId;
    question.answered = true;
    await question.save();
    res.status(200).send(question);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
