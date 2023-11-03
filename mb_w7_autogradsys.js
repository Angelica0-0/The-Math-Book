const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

// Mock database object
const questionsDB = {
    '1': {
        question: 'What is 2 + 2?',
        answer: '4'
    }
    // ... other questions
};

app.post('/submit-answer', (req, res) => {
    const questionId = req.body.questionId;
    const userAnswer = req.body.answer;
    const correctAnswer = questionsDB[questionId].answer;

    if (userAnswer === correctAnswer) {
        res.send({ correct: true, feedback: 'Correct answer!' });
    } else {
        res.send({ correct: false, feedback: 'Incorrect answer. Try again!' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
