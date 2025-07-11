import { useContext,useState,useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";

import JobForm from "../components/JobForm";
import JobCard from "../components/JobCard";

const EmployerDashboard=()=>{
    const {user}=useContext(AuthContext);
    const [jobs,setJobs]=useState([]);
    const [editingJob,setEditingJob]=useState(null);

    const headers={
        Authorization:`Bearer ${user?.token}`
    };

    const fetchJobs = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_REACT_APP_JOBS_URL, { headers });
        // console.log('res.data =', res.data);
        if (!Array.isArray(res.data)) {
          throw new Error("Jobs not returned as array");
        }

        const myJobs = res.data.filter(job => {
          return job.createdBy && job.createdBy._id === user.user.id;
        });

        setJobs(myJobs);
      } catch (err) {
        console.error("Error fetching jobs:", err.message || err);
      }
    };

const handleCreateUpdateJobs=async (jobData)=>{
    try {
        if(editingJob){
            await axios.put(`${import.meta.env.VITE_REACT_APP_JOBS_URL}/${editingJob._id}`, jobData, {headers});
        }else{
            // console.log("The endpoint:", import.meta.env.VITE_REACT_APP_CREATEJOBS_URL);
            await axios.post(import.meta.env.VITE_REACT_APP_CREATEJOBS_URL, jobData, {headers});
        }
        fetchJobs();
        setEditingJob(null);
    } catch (err) {
        console.error("Job create/update error:", err);
    }
}
const handleDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_REACT_APP_JOBS_URL}/${id}`, { headers });
    fetchJobs();
};

    useEffect(() => {
    fetchJobs();
  }, []);
 return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Employer Dashboard</h2>
      <JobForm onSubmit={handleCreateUpdateJobs} editingJob={editingJob} />
      {jobs.map(job => (
        <JobCard
          key={job._id}
          job={job}
          onEdit={setEditingJob}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default EmployerDashboard;