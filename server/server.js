const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv/config');
const CONSTANTS = require('./shared/constants.js');
const connectDB = require('./config/mongodb.js')
const app = express();
// const port = CONSTANTS.PORT || 4000;
const port = process.env.PORT || 4000;
connectDB()

app.use(express.json());
// Use cors middleware
app.use(cors());

// Or configure to allow only specific origin
// app.use(cors({ origin: 'http://localhost:5173' }));


let indexRouter = require('./routes/index.routes');
app.use('',indexRouter);

app.listen(port,()=>{console.log(`Express app listening on PORT : ${port}`)})