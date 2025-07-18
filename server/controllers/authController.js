const user=require('../models/userModel');
const bycrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


const registerUser=async (req,res)=>{
    try {
        const {name,email,password,role,companyName}=req.body;

        if(!name||!email||!password||!role){
            return res.status(400).json({message:"All fields are required"});

        }
        const existingUser=await user.findOne({email})

        if(existingUser){
            return res.status(400).json({message:"User already exists"});

        }

        const hashedPassword=await bycrypt.hash(password,10);

        const newUser=new user({
            name,
            email,
            password:hashedPassword,
            role,
            companyName:role==='employer' ? companyName:undefined

        })

        await newUser.save();

        const token=jwt.sign(
            {id:newUser._id, role:newUser.role},
           process.env.JWT_SECRET,
           {expiresIn:'7d'}
        );

        res.status(201).json({
            user:{
                id:newUser._id,
                name:newUser.name,
               email:newUser.email,
               role:newUser.role,
               companyName:newUser.companyName
            },
            token
        })

       
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Something went wrong'});
        
    }
};

const loginUser=async (req,res)=>{
    try {
        const {email,password}=req.body;

        if(!email||!password){
            return res.status(400).json({message:"Email and Password are required"});
        }

        const UserOne=await user.findOne({email});
        if(!UserOne){
            return res.status(401).json({message:"Invalid email or password"});
        }

        const matching= await bycrypt.compare(password,UserOne.password);
            if(!matching){
                return res.status(401).json({message:"Enter the Correct password"});
            }

        const token=jwt.sign(
            {id:UserOne._id, role:UserOne.role},
            process.env.JWT_SECRET,
            {expiresIn:'7d'}
        );

        res.json({
            user:{
                id:UserOne._id,
                name:UserOne.name,
                email:UserOne.email,
                role:UserOne.role,
                companyName:UserOne.companyName
            },
            token,
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Something went wrong'});
        
    }
}

module.exports={registerUser,loginUser};