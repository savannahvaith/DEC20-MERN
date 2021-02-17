const express = require('express');

// instantiate my app 
const app = express(); 

// Requests
app.get("/", (req, res) => {
    res.send("hello world!");
});


// communicate with the app on a specific port
app.listen(5019);