import { useState,useEffect } from "react";

const JobForm=({onSubmit,editingJob})=>{
    const [form,setForm]=useState({
        title:'',
        description:'',
        location:'',
        salary:'',
        jobType:'full-time',
    });

    useEffect(()=>{
        if(editingJob){
            setForm(editingJob)
        }
    },
    [editingJob]
);
 const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit=(e)=>{
    e.preventDefault();
    onSubmit(form);

    setForm({ title: '', description: '', location: '', salary: '', jobType: 'full-time' })
 }

 return(
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-6">
        <h3 className="font-bold mb-2">{editingJob ? "Edit Job" : "Post New Job"}</h3>
         <input name="title" value={form.title} onChange={handleChange} placeholder="Title"
        className="w-full p-2 border mb-2 rounded" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description"
        className="w-full p-2 border mb-2 rounded" />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location"
        className="w-full p-2 border mb-2 rounded" required />
      <input name="salary" type="number" value={form.salary} onChange={handleChange} placeholder="Salary"
        className="w-full p-2 border mb-2 rounded" />
      <select name="jobType" value={form.jobType} onChange={handleChange}
        className="w-full p-2 border mb-2 rounded">
        <option value="full-time">Full Time</option>
        <option value="part-time">Part Time</option>
        <option value="contract">Contract</option>
        <option value="internship">Internship</option>
      </select>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        {editingJob ? "Update Job" : "Create Job"}
      </button>

    </form>
   
 );



};


export default JobForm;
