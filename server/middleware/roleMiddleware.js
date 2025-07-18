
const restrictTo=(...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status (403).json({message:"Forbidden:You don't have access"});
        }

        next();
    };
};


module.exports=restrictTo;