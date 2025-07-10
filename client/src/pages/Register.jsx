import { useState,useEffect } from "react";
import axios from 'axios';

import { AuthContext } from "../context/authContext";
import {useNavigate} from 'react-router-dom';
import { useContext } from "react";

const Register=()=>{
    const {login}=useContext(AuthContext);
    const navigate=useNavigate();

    const [form,setForm]=useState({
        name:'',
        email:'',
        password:'',
        role:'jobseeker',
        companyName:''
    });

  const handleChange = (e) => {
  const fieldName = e.target.name;
  const fieldValue = e.target.value;

  setForm({
    ...form,            
    [fieldName]: fieldValue  
  });
};

const handleSubmit=async (e)=>{
    e.preventDefault();

    try{
        const res=await axios.post(import.meta.env.REACT_APP_REGISTER_URL,form);
        login(res.data);

       navigate(res.data.user.role === 'employer' ? '/employer-dashboard' : '/dashboard');


    }catch (err) {
  if (err.response && err.response.data && err.response.data.message) {
    alert(err.response.data.message);
  } else {
    alert('Registration failed');
  }
}

};

return(
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input name="name" type="text" placeholder="Name" onChange={handleChange} className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
        <select name="role" onChange={handleChange} className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" id="" required>
            <option value="jobseeker">Job Seeker</option>
            <option value="employer">Employer</option>
        </select>
        {form.role==='employer' &&(
            <input name="companyName" placeholder="Company Name" onChange={handleChange} className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        )}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">Register</button>

    

    </form>


);

};

export default Register;