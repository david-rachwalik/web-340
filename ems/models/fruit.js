/*
    Title: fruit.js
    Author: David Rachwalik
    Date: 2022/02/20
    Description: Fruit model for WEB-340 site
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;

// define the fruitSchema
const fruitSchema = new Schema({
  name: String,
});
// define the fruit model
const Fruit = mongoose.model('Fruit', fruitSchema);

// expose the fruit to calling files
module.exports = Fruit;
