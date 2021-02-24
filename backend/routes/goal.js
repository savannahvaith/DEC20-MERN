'use strict';
const router = require('express').Router();
const { Goal } = require("../config/db");


// ? GET ALL
router.get("/getAll", (req, res, next) => {
    Goal.find((err, products) => {
        if (err) {
            next(err);
        }
        res.send(products);
    });
});

// ? GET ONE
router.get("/get/:id", (req, res, next) => {
    Goal.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
})

// ? CREATE
router.post("/create", ({body}, res, next) => {
    const item = new Goal(body);
    item.save()
        .then((result) => {
            res.status(201).send(`${result.title} has been added successfully!`)
        })
        .catch((err) => next(err));
});

// ? DELETE
router.delete("/delete/:id", (req, res, next) => {
    Goal.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});

// ? PARTIAL UPDATE
router.patch("/update/:id", (req, res, next) => {
    Goal.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (err) => {
            if (err) {
                next(err);
            }
            res.status(202).send(`Successfully updated!`);
        })
});

// ? REPLACE
router.put("/replace/:id", (req, res, next) => {
    Goal.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err) => {
        if (err) {
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});


module.exports = router; 