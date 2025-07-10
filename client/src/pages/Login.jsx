import { useState,useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const {login}=useContext(AuthContext);

    const navigate=useNavigate();
    const[form,setForm]=useState({
        email:'',
        password:''
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
        const res=await axios.post(import.meta.env.REACT_APP_LOGIN_URL,form);
        login(res.data);
        navigate(res.data.user.role === 'employer' ? '/employer-dashboard' : '/dashboard');

    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
};

    return(
          <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">Login</button>
    </form>
    );
};
;
export default Login;
