const mongoose=require('mongoose');

const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        enum:['full-time','part-time','internship','contract','freelance'],
        default:'full-time',
    },
    location:{
        type:String,
        required:true
    },
    salary:{
        type:Number
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel',
        required:true
    },
    applications: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'UserModel'
            },
            appliedAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
},{timestamps:true});


module.exports=mongoose.model('jobModel',jobSchema);