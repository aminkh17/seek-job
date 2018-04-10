const express = require('express');
const router = express.Router();
var Job = require('../../models/job/job.js');

const API = '/jobs';

router.get(API, (req, res) => {
    Job.find({}, function(err, jobs){
        if(err) throw err;
        res.status(200).json(jobs);
    });
});

router.get(API+'/:id', (req, res)=>{
    var id = req.params.id;
    Job.findById(id, function(err, thejob){
        if(err) throw err;
        res.status(200).json(thejob);
    })
})
  
router.post(API, (req, res)=>{
    var job = req.body;
    if(job._id){
        //go to edit
        Job.findByIdAndUpdate(job._id, job, function(err, thejob){
            if (err) throw err;
            console.log('Job updated');
            res.status(200).json(thejob);
        })
    }
    else{
        //add new item
        var newJob = Job({
            Title: job.Title,
            Location: job.Location,
            Description: job.Description,
            Date: new Date(),
            Status: ['New']
        })
        newJob.save(function(Err){
            if(Err) throw Err;

            console.log('Job Created');
            res.status(200).json(newJob);
        })
    }
});

router.delete(API+'/:id', (req, res)=>{
    var id = req.params.id;
    Job.findOneAndRemove(id, function(err){
        console.log('Job deleted');
        res.status(200).json(id);
    });
})


module.exports = router;