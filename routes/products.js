'use strict';
const router = require('express').Router();

let products=["deodrant","apples","cheese","pineapple"];

// requests (C,R,U,D)
router.get("/getAll", (req, res, next) => {
    res.send(`Here's the information you asked for... ${products}`);
    // next();
});

// router.use((req,res,next) => {
//     console.log("hello");
//     res.send("done");
// })

router.post("/create", (req, res, next) => {
    const name = req.body.name;
    products.push(name);
    res.send(`Added ${name} to product list!\n Here's the new list: ${products}`);
});

// url parameters?
router.delete("/delete/:name", (req, res, next) => {
    console.log(req.params.name);
    res.send(`done`);
});

// query parameter
router.patch("/update/:id", (req, res, next) => {
    const id = req.params.id;
    console.log(`id: ${id}`);
    // const name = req.query.name; 
    // const age = req.query.age;

    // destructuring?
    const { name } = req.query;
    products[id] = name;
    res.send(`got your info, k thanks bye ${products}`);

});


module.exports = router; 