const express=require('express');

const router=express.Router();

const {createJob,getAllJobs,getJobById,updateJob,deleteJob} =require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');
const restrictTo = require('../middleware/roleMiddleware');

//

router.get('/',getAllJobs);
router.get('/:id',getJobById);



router.post('/create', protect, restrictTo('employer'),createJob);
router.put('/:id',protect,restrictTo('employer'),updateJob);
router.delete('/:id',protect,restrictTo('employer'),deleteJob);


module.exports=router;