app.post('/grade-submission', (req, res) => {
    const submissionId = req.body.submissionId;
    const grade = req.body.grade;

    // Here you would update the submission in the database with the grade
    console.log(`Submission ${submissionId} graded with: ${grade}`);
    res.send('Submission graded successfully.');
});
