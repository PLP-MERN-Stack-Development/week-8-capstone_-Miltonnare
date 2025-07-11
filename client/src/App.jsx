import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login'
import EmployerDashboard from './pages/employerDashboard';
function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/employer-dashboard" element={<EmployerDashboard />} />

    </Routes>

    </BrowserRouter>
  )
}

export default App;
