const morgan = require('morgan');
const {models} = require("mongoose");

function logger(app){
    app.use(morgan('dev'));
}

module.exports = logger;