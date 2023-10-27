function postQuestion() {
    const content = document.getElementById('questionContent').value;

    fetch('/questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: content,
            author: 'Anonymous' // Or get the user's name from a login system
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Refresh the questions list or add the new question to the list
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function fetchQuestions() {
    fetch('/questions')
    .then(response => response.json())
    .then(data => {
        const questionsList = document.getElementById('questionsList');
        questionsList.innerHTML = ''; // Clear the list
        data.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.textContent = question.content;
            questionsList.appendChild(questionDiv);
        });
    });
}
