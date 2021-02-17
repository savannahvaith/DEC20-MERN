const express = require('express');

// instantiate my app 
const app = express(); 

// Requests
app.get("/", (req, res) => {
    res.send("hello world!");
});

app.get("/hello", (req, res) => {
    res.status(200).send("This is the hello route");
    // console.log(`heyyyy!`);
});

app.get("/error", (req,res)=>{
    res.status(500).send("oops");
});

// communicate with the app on a specific port
const server = app.listen(5019, () => {
    console.log(`Server has successfully started on port number: ${server.address().port}`);
})