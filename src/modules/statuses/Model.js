const mongoose = require('mongoose');
const {Schema} = mongoose;

const statusSchema = new Schema({
    title: {type: String, required: true},
    status: {type: String, required: true},
});

const Status = mongoose.model('Status', statusSchema);

module.exports = Status;