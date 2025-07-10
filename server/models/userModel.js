const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema(
    {
        name:{type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:String
        },
        role:{
            type:String,
            enum:['employer','jobseeker'],
            required:true
        },
        companyName:{
            type:String
        }

    },{timeseries:true}
);


module.exports=mongoose.model('UserModel',UserSchema);