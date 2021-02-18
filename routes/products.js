'use strict';
const router = require('express').Router();
const { Product } = require("../config/db");


// ? GET ALL
router.get("/getAll", (req, res, next) => {
    Product.find((err, products) => {
        if (err) {
            next(err);
        }
        res.send(products);
    });
});

// ? GET ONE
router.get("/get/:id", (req,res,next) => {
    Product.findById(req.params.id, (err,result) => {
        if(err){
            next(err);
        }
        res.status(200).send(result);
    })
})

// ? CREATE
router.post("/create", (req, res, next) => {
    const item = new Product(req.body);
    item.save()
        .then((result) => {
            res.status(201).send(`${result.name} has been added successfully!`)
        })
        .catch((err) => next(err));
});

// ? DELETE
router.delete("/delete/:id", (req, res, next) => {
    Product.findByIdAndDelete(req.params.id, (err) => {
        if(err){
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});

// ? PARTIAL UPDATE
router.patch("/update/:id", (req, res, next) => {
   Product.findByIdAndUpdate(req.params.id, 
    req.body, 
    {new: true}, 
    (err) => {
       if(err){
           next(err);
       }
       res.status(202).send(`Successfully updated!`);
   })
});

// ? REPLACE
router.put("/replace/:id", (req,res,next) => {
    const {name, price, onSale} = req.query;
    Product.findByIdAndUpdate(req.params.id, {name,price,onSale}, {new: true}, (err)=>{
        if(err){
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});


module.exports = router; 