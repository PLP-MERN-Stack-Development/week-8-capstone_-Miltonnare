const express=require('express');

const dotenv=require('dotenv');
const cors=require('cors');
const connectDb=require('./config/db');

const authRoutes=require('./routes/authRouter');
const jobRoutes=require('./routes/jobRoute');

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());
connectDb();

app.get('/',(req,res)=>{
    res.send("Job's Parlour API is running" );
});

app.use('/api/auth',authRoutes);

app.use('/api/jobs',jobRoutes);

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`Server running on PORT:${PORT} `)
})