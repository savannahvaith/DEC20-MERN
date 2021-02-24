'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { DB_URL, DB_NAME } = require('../config/CONSTS.json');

const goalSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String, 
    created:{
        type:Date,
        default: Date.now
    },
    due:{
        type: Date
    }
});

const Goal = model('Goal', goalSchema);

mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Connected`);
    }
});

module.exports = { "Goal": Goal };