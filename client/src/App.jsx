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

  // Component to handle login page access
  const LoginWrapper = () => {
    if (user) {
      // Redirect logged-in users to their appropriate dashboard
      if (user.user?.role === 'employer') {
        return <Navigate to="/employer-dashboard" replace />;
      } else if (user.user?.role === 'jobseeker') {
        return <Navigate to="/dashboard" replace />;
      }
    }
    return <Login />;
  };

  // Component to handle register page access
  const RegisterWrapper = () => {
    if (user) {
      // Redirect logged-in users to their appropriate dashboard
      if (user.user?.role === 'employer') {
        return <Navigate to="/employer-dashboard" replace />;
      } else if (user.user?.role === 'jobseeker') {
        return <Navigate to="/dashboard" replace />;
      }
    }
    return <Register />;
  };

  // Component to handle jobseeker dashboard access
  const JobSeekerDashboardWrapper = () => {
    if (!user || !user.token) {
      return <Navigate to="/login" replace />;
    }
    
    if (user.user?.role !== 'jobseeker') {
      // Redirect to appropriate dashboard based on role
      if (user.user?.role === 'employer') {
        return <Navigate to="/employer-dashboard" replace />;
      } else {
        // Unknown role, redirect to login
        return <Navigate to="/login" replace />;
      }
    }
    
    return <JobSeekerDashboard />;
  };

  // Component to handle employer dashboard access
  const EmployerDashboardWrapper = () => {
    if (!user || !user.token) {
      return <Navigate to="/login" replace />;
    }
    
    if (user.user?.role !== 'employer') {
      // Redirect to appropriate dashboard based on role
      if (user.user?.role === 'jobseeker') {
        return <Navigate to="/dashboard" replace />;
      } else {
        // Unknown role, redirect to login
        return <Navigate to="/login" replace />;
      }
    }
    
    return <EmployerDashboard />;
  };

  return(
    <BrowserRouter>
      <Navbar user={user} onLogout={logout} />
      <Routes>
        {/* Public routes with authentication checks */}
        <Route path='/' element={<LandingPageWrapper />} />
        <Route path="/register" element={<RegisterWrapper />} />
        <Route path="/login" element={<LoginWrapper />} />

        {/* Protected dashboard routes with role-based access */}
        <Route path="/dashboard" element={<JobSeekerDashboardWrapper />} />
        <Route path="/employer-dashboard" element={<EmployerDashboardWrapper />} />

        {/* Catch-all route - redirect to appropriate page */}
        <Route path="*" element={
          user ? (
            user.user?.role === 'employer' ? 
              <Navigate to="/employer-dashboard" replace /> : 
              <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/" replace />
          )
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
