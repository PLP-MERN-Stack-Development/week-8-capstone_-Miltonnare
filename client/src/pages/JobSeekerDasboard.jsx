import { useEffect, useState } from "react";
import axios from 'axios';
import JobItem from '../components/JobItem';

const JobSeekerDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_REACT_APP_JOBS_URL);
      // Adjust this line based on your backend response:
      // If your backend returns { jobs: [...] }
      setJobs(Array.isArray(res.data) ? res.data : res.data.jobs);
    } catch (error) {
      console.error("Failed to Fetch Jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
      {loading ? (
        <p className="text-gray-500">Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map(job => (
          <JobItem key={job._id} job={job} />
        ))
      )}
    </div>
  );
};

export default JobSeekerDashboard;