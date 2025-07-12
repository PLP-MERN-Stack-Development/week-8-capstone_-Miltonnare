const express=require('express');

const router=express.Router();

const {createJob,getAllJobs,getJobById,updateJob,deleteJob,applyToJob} =require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');
const restrictTo = require('../middleware/roleMiddleware');

//

router.get('/',getAllJobs);
router.get('/:id',getJobById);



router.post('/create', protect, restrictTo('employer'),createJob);
router.put('/:id',protect,restrictTo('employer'),updateJob);
router.delete('/:id',protect,restrictTo('employer'),deleteJob);

// Apply to job route - only job seekers can apply
router.post('/:id/apply', protect, restrictTo('jobseeker'), applyToJob);


module.exports=router;