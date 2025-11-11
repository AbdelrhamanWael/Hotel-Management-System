// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useAuth } from './hooks/useAuth'; // Custom hook to get user & role
// import ProtectedRoute from './components/Common/Layout/ProtectedRoute';
// login register forgot password
import AuthLayout from './components/Auth/AuthLayout.jsx';

// Public Pages (accessible to everyone)
import HomePage from './Features/Public/Pages/HomePage.jsx';
import HotelDetailPage from './Features/Public/Pages/HotelDetailPage';
import PublicLayout from './Features/Public/layouts/PublicLayout';
import HotelsPage from './Features/Public/Pages/HotelsPage.jsx';
import AboutPage from './Features/Public/Pages/AboutPage.jsx';
import ContactPage from './Features/Public/Pages/ContactPage.jsx';




// Role-Specific Pages (Manager and Admin)
import ManagerDashboard from './Features/Manager/Pages/Dashboard.jsx';
import AdminDashboard from './Features/Admin/Pages/Dashboard.jsx';
// import AuthLayout from './components/Auth/AuthLayout'; // Contains Login/Register
import NotFoundPage from './components/common/NotFound'; // Simple 404 page

function App() {
  // const { user, role, isLoading } = useAuth(); // Assume this hook returns user details

  const isLoading = false; // Placeholder for loading state
  if (isLoading) {
    return <div>Loading Application...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* ======================= 1. PUBLIC ROUTES (Accessible to all) ======================= */}
        <Route element={<PublicLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path='/HotelsPage' element={<HotelsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />

          <Route path="/hotels" element={<HotelDetailPage />} />


        </Route>

        {/* ======================= AUTH ROUTES ======================= */}
        <Route path="/login" element={<AuthLayout />} />
        <Route path="/register" element={<AuthLayout />} />
        <Route path="/forgot-password" element={<AuthLayout />} />
        

        {/* ======================= 2. MANAGER ROUTES (Requires 'manager' role) ======================= */}
        <Route path='/manager' element={ <ManagerDashboard /> } />


        {/* ======================= 3. ADMIN ROUTES (Requires 'admin' role) ======================= */}
        <Route path='/admin' element={ <AdminDashboard /> } />

        {/* ======================= 4. FALLBACK ROUTE ======================= */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;