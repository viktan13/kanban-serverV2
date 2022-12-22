const mongoose = require('mongoose');
const {Schema} = mongoose;



const cardSchema = new Schema({
    name: String,
    status: String,
    priority: Number,
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;