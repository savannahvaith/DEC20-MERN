const router = require('express').Router();

// requests (C,R,U,D)
router.get("/getAll", (req,res,next) => {
    res.send(`Here's the information you asked for...`);
    // next();
});

// router.use((req,res,next) => {
//     console.log("hello");
//     res.send("done");
// })

router.post("/create", (req,res,next) => {
    const name = req.body.name; 
    res.send(`Hello there ${name}`);
});

module.exports = router; 