const mongoose = require('mongoose');
const CONSTANTS = require('./../shared/constants');

const connectDB = async () =>{
    try{
         console.log("Connecting to MongoDB...");
         mongoose.connection.on('connected',()=>console.log('.....Connection Created.....'))
         await mongoose.connect(`${process.env.MONGODB_URI}/${CONSTANTS.mongoDBName}`)
    }
    catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); 
  }
   
}

module.exports = connectDB;