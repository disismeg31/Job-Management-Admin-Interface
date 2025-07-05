const Job = require('./../models/job.js');


function newJob(req,res){
    const jobDataToInsert = req.body;

    const job = new Job(jobDataToInsert);
    job.save()
    .then((result)=>{
        const {title,company} = jobDataToInsert;
        res.json({
            message:"Job entered sucessfully",
            payload:{title,company},
            status:true
        })
    })
    .catch((err)=>{
        res.json({
            message:err.message,
            payload:err,
            status:false
        })
    })
}

function getJobs(req,res){
    const filters = {};
    if (req.query.title) {
        filters.title = { $regex: req.query.title, $options: 'i' }; // case-insensitive partial match
    }

    if (req.query.location) {
        filters.location = { $regex: req.query.location, $options: 'i' };
    }

    if (req.query.jobType) {
        filters.jobType = req.query.jobType;
    }

    if (req.query.minSalary || req.query.maxSalary) {
        filters['salaryRange.min'] = { $gte: Number(req.query.minSalary || 0) };
        filters['salaryRange.max'] = { $lte: Number(req.query.maxSalary || Infinity) };
    }
    Job.find(filters,{_id:0,__v:0})
    .then((result)=>{
        if(result.length>0){
            res.json({
            message:"fetched jobs successfully",
            payload:result,
            status:true
        })
        }
        else{
            res.json({
            message:"No jobs found yet",
            payload:result,
            status:true
        })
        } 
    })
    .catch((err)=>{
        res.json({
            message:"Error while fetching jobs",
            payload:err,
            status:false
        })
    })
}


module.exports = {
    newJob,
    getJobs,
}