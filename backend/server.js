'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const { GOAL_URL } = require('./config/CONSTS.json');

// instantiate my app 
const app = express();
// middleware!
app.use(cors());
app.use(bodyParser.json());

//Custom middleware
const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

// this will print the date before each request.. 
app.use(logger);

// importing all of the routes in goal.js
const goalRoute = require('./routes/goal');

app.use(`${GOAL_URL}`, goalRoute);

// error handling
app.use((req, res, next) => {
    next(createError(404, 'Resource not found'));
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || "something went wrong");
})

// communicate with the app on a specific port
const server = app.listen(5019, () => {
    console.log(`Server has successfully started on port number: ${server.address().port}`);
});

module.exports = server; 