const mongoose = require('mongoose');
const CONSTANTS = require('./../shared/constants');

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please enter the title for the job"]
    },
    company:{
        type:String,
        required:[true,"please enter the company name"]
    },
    location:{
        type:String,
        required:[true,"please enter the location"]
    },
    jobType:{
        type:String,
        required:[true,"please enter the job type"],
        enum:{
            values:["fullTime","partTime","contract","internship"],
            message:'The job type must be any of these "fullTime", "partTime", "contract","internship"'
        }
    },
    salaryRange:{
        min:{
            type:Number,
            required:[true,"please enter the min salary range"],
        },
        max:{
            type:Number,
            required:[true,"please enter the max salary range"],
        }
    },
    description:{
        type:String,
        required:[true,"Please enter the job description"],
        minLength: [20, "description should be within range 20-1000"],
        maxLength: [1000, "description should be within range 20-1000"]
    },
    requirements:{
        type:String,
        // required:[true,"Please enter the job requirements"],
        minLength: [20, "requirements should be within range 20-1000"],
        maxLength: [1000, "requirements should be within range 20-1000"]
   
    },
    responsibilities:{
        type:String,
        // required:[true,"Please enter the job responsibilities"],
        minLength: [20, "responsibilities should be within range 20-1000"],
        maxLength: [1000, "responsibilities should be within range 20-1000"]

    },
    deadline:{
        type:Date,
        required:[true,"please enter the due date"]
    }
},{ timestamps: true })

const Job = mongoose.model(CONSTANTS.collectionName.jobs_collection,jobSchema);
module.exports = Job; 