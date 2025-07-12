import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login'
import EmployerDashboard from './pages/EmployerDashboard';
import JobSeekerDashboard from './pages/JobSeekerDasboard';
import LandingPage from './pages/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

function App(){
  const { user, logout } = useContext(AuthContext);

  return(
    <BrowserRouter>
      <Navbar user={user} onLogout={logout} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <JobSeekerDashboard />
          </ProtectedRoute>
        } />

        <Route path="/employer-dashboard" element={
          <ProtectedRoute>
            <EmployerDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
