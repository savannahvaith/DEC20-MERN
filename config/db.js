'use strict';
const mongoose = require('mongoose'); 
const {Schema, model} = mongoose; 

const productSchema = new Schema({
    name: String, 
    price: String,
    onSale: Boolean
});

const Product = model('Product', productSchema); 

mongoose.connect(`mongodb://localhost:27017/tesco`, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.error(err);
    }else{
        console.log(`Connected`);
    }
});

module.exports = {"Product": Product};