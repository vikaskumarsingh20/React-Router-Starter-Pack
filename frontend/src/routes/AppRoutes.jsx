// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/forms/LoginPage';
import SignupPage from '../components/forms/SignupPage';
import Homepage from '../components/home/Homepage';
import NotFoundPage from '../components/home/NotFoundPage';
import ForgetPassword from '../components/forms/ForgetPassword';
import NewPassword from '../components/forms/NewPassword';
import Dashboard from '../components/home/admin/Dashboard';
import ForLearning from '../components/forms/ForLearning';
import Aboutus from '../components/pages/Aboutus';
import Blogs from '../components/pages/blog/Blogs';
import PrivateRoute from './PrivateRoute';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path='/about-us' element={<Aboutus />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/forlearning" element={<ForLearning />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
