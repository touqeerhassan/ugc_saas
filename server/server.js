const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const colors = require('colors');
const cors = require('cors');
var bodyParser = require('body-parser');

// Route Files
const main = require('./routes/main');


// DB Connection
const db = require('./config/keys').MongoURI;
// Connect MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'.green.bold))
    .catch(err => console.log(err));


const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

app.use(cors());

// Routing for API Service
app.use('/api/v1/main', main);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));