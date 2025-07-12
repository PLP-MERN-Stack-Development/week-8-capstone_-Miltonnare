
const Job = require('../models/jobModel');
const User = require('../models/userModel');

const createJob=async (req,res)=>{
    const {title,description,location,jobType,salary}=req.body;

    if(!title||!location){
        return res.status(400).json({message:"Title and Location are mandatory"});
    }

    const newJob=await Job.create({
        title,
        description,
        location,
        jobType,
        salary,
        createdBy:req.user._id


    });

    res.status(201).json(newJob);
};


const getAllJobs=async (req,res)=>{
    const Jobs=await Job.find().populate('createdBy','name companyName');

    res.json(Jobs);
};

const getJobById=async (req,res)=>{
    const job=await Job.findById(req.params.id).populate('createdBy','name companyName');

    if(!job) return res.status(404).json({message:'Job Not Found'});

    res.json(job);
};

const updateJob=async (req,res)=>{
    const job=await Job.findById(req.params.id);

    if(!job) return res.status(404).json({message:'Job Not Found'});

    if(job.createdBy.toString()!==req.user._id.toString()){
        return res.status(403).json({message:"Not Authorized to Update this Job"});
    }

    const updated=await Job.findByIdAndUpdate(req.params.id,
        req.body,        
      { new: true } 
    );

    res.json(updated);
}

const deleteJob=async (req,res)=>{
    const job=await Job.findById(req.params.id);
    if(!job) {
        return res.status(404).json({message:"Job Not Found"})
    };

    if (job.createdBy.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized to delete this job" });
  };

  await Job.deleteOne();
  res.json({ message: "Job deleted" });
};

const applyToJob = async (req, res) => {
  const jobId = req.params.id;
  const userId = req.user._id;

  const job = await Job.findById(jobId);
  if (!job) return res.status(404).json({ message: 'Job not found' });

  // prevent duplicate application
  const alreadyApplied = job.applications.find(app => app.user.toString() === userId.toString());
  if (alreadyApplied) return res.status(400).json({ message: 'You already applied for this job' });

  job.applications.push({ user: userId });
  await job.save();

  res.status(200).json({ message: 'Application successful' });
};


module.exports={
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
    applyToJob
};
