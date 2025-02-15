// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import LoginPage from "../components/forms/LoginPage";
import SignupPage from "../components/forms/SignupPage";
import Homepage from "../components/home/Homepage";
import NotFoundPage from "../components/home/NotFoundPage";
import ForgetPassword from "../components/forms/ForgetPassword";
import NewPassword from "../components/forms/NewPassword";
import Dashboard from "../components/home/admin/Dashboard";
import ForLearning from "../components/forms/ForLearning";
import Aboutus from "../components/pages/Aboutus";
import Blogs from "../components/pages/blog/Blogs";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../contexts/AuthContext";
// import Profile from "../components/pages/Profile";
import Account from "../components/pages/profile/Account";
import EditProfile from "../components/pages/profile/EditProfile";
import Ehome from "../components/pages/e-commerce/Ehome";
import Ecart from "../components/pages/e-commerce/Ecart";


const AppRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route
        path="/account"
        element={isLoggedIn ? <Account /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/account/edit-profile"
        element={isLoggedIn ? <EditProfile /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/" replace /> : <SignupPage />}
      />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/services/e-home" element={<Ehome />} />
      <Route path="/services/e-cart" element={<Ecart />} />

      <Route path="/dashboard" element={<Outlet />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/forlearning" element={<ForLearning />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
