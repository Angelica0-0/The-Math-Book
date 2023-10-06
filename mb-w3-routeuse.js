const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const questionRoutes = require('./questionRoutes'); // Import your question route

// ...

// Use the question route
app.use('/api', questionRoutes);

// ...
