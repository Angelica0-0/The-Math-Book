app.post('/questions', async (req, res) => {
    const question = new Question({
        content: req.body.content,
        author: req.body.author
    });

    try {
        await question.save();
        res.status(201).send(question);
    } catch (e) {
        res.status(400).send(e);
    }
});
