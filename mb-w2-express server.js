const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/math_qa_platform', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB: ' + err);
  });

// Parse JSON request bodies
app.use(bodyParser.json());

// Define a basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Math Q&A Platform API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
