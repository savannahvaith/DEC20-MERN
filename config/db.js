'use strict';
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { DB_URL, DB_NAME } = require('../config/CONSTS.json');

const productSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    brand: String,
    price: String,
    onSale: Boolean,
    department: String
});

const Product = model('Product', productSchema);

mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Connected`);
    }
});

module.exports = { "Product": Product };