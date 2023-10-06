// Add this function to your grading route
router.post('/grade', async (req, res) => {
  try {
    const { questionId, studentAnswer } = req.body;
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: 'Question not found.' });
    }
    const correctAnswer = question.answer;
    const isCorrect = studentAnswer === correctAnswer;
    res.json({ isCorrect });
  } catch (error) {
    res.status(500).json({ error: 'Could not grade the question.' });
  }
});
