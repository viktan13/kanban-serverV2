const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:qCLS9HmfJ90TN8Sf@cluster0.umvyr8v.mongodb.net/?retryWrites=true&w=majority';
const options = {
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity};
    }

function dbConnection(){
    mongoose.set('strictQuery', true);
 mongoose.connect(connectionString, options)
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.log(err));
}

module.exports = dbConnection;