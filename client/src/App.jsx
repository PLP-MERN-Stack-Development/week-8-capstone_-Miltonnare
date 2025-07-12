import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

  // Component to handle landing page access
  const LandingPageWrapper = () => {
    if (user) {
      // Redirect logged-in users to their appropriate dashboard
      if (user.user?.role === 'employer') {
        return <Navigate to="/employer-dashboard" replace />;
      } else if (user.user?.role === 'jobseeker') {
        return <Navigate to="/dashboard" replace />;
      }
    }
    return <LandingPage />;
  };

  return(
    <BrowserRouter>
      <Navbar user={user} onLogout={logout} />
      <Routes>
        <Route path='/' element={<LandingPageWrapper />} />
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
