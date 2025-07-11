import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login'
import EmployerDashboard from './pages/employerDashboard';
import JobSeekerDashboard from './pages/JobSeekerDasboard';
function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<JobSeekerDashboard />} />
      <Route path="/employer-dashboard" element={<EmployerDashboard />} />

    </Routes>

    </BrowserRouter>
  )
}

export default App;
