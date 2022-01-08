const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cheeseSchema = new Schema({
    name: String,
    countryOfOrigin: String,
    img: String
});

module.exports = mongoose.model('Cheese', cheeseSchema);