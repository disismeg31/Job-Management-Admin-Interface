const mongoose = require('mongoose');
const CONSTANTS = require('./../shared/constants');

const connectDB = async () =>{
    mongoose.connection.on('connected',()=>console.log('.....Connection Created.....'))
    await mongoose.connect(`${process.env.MONGODB_URI}/${CONSTANTS.mongoDBName}`)
}

module.exports = connectDB;