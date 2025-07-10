
const jobs=require('../models/jobModel');

const createJob=async (req,res)=>{
    const {title,description,location,jobType,salary}=req.body;

    if(!title||!location){
        return res.status(400).json({message:"Title and Location are mandatory"});
    }

    const newJob=await jobs.create({
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
    const Jobs=await jobs.find().populate('createdBy','name companyName');

    res.json(Jobs);
};

const getJobById=async (req,res)=>{
    const job=await jobs.findById(req.params.id).populate('createdBy','name companyName');

    if(!job) return res.status(404).json({message:'Job Not Found'});

    res.json(job);
};

const updateJob=async (req,res)=>{
    const job=await jobs.findById(req.params.id);

    if(!job) return res.status(404).json({message:'Job Not Found'});

    if(job.createdBy.toString()!==req.user._id.toString()){
        return res.status(403).json({message:"Not Authorized to Update this Job"});
    }

    const updated=await jobs.findByIdAndUpdate(req.params.id,
        req.body,        
      { new: true } 
    );

    res.json(updated);
}

const deleteJob=async (req,res)=>{
    const job=await jobs.findById(req.params.id);
    if(!job) {
        return res.status(404).json({message:"Job Not Found"})
    };

    if (job.createdBy.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized to delete this job" });
  };

  await jobs.deleteOne();
  res.json({ message: "Job deleted" });
};


module.exports={
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob
};
