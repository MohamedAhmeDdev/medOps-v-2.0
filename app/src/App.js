import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import { lazy } from 'react';
import Login from "./Dashboards/Login";
import StaffResetPassword from "./AccountRecovery/ResetPassword";
import StaffPasswordReport from "./AccountRecovery/PasswordReport";
import StaffForgotPassword from "./AccountRecovery/ForgotPassword";

import Medicine from "./Pages/User/Medicine";
import Cart from "./Pages/User/Cart";
import Checkout from "./Pages/User/Checkout";
import Orders from "./Pages/User/Orders";
import ProductDetail from "./Pages/User/ProductDetail";
import SingleOrder from "./Pages/User/SingleOrder";

import UserLogin from "./Pages/User/Auth/UserLogin";
import Signup from "./Pages/User/Auth/Signup";
import UserForgotPassword from "./Pages/User/Auth/UserForgotPassword";
import UserResetPassword from "./Pages/User/Auth/UserResetPassword";
import ProtectedRoute from './utils/ProtectedRoute';

const ManagerLayout = lazy(() => import('./Dashboards/Manager/containers/Layout'))
const OperatorLayout = lazy(() => import('./Dashboards/Operator/containers/Layout'))
const LogisticsLayout = lazy(() => import('./Dashboards/Logistics/containers/Layout'))
const TransporterLayout = lazy(() => import('./Dashboards/Transporter/containers/Layout'))



function App() { 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/userForgotPassword" element={<UserForgotPassword/>} />
          <Route path="/userResetPassword/:token" element={<UserResetPassword/>} />
          <Route path="/medicine" element={<Medicine/>}/>
          <Route path="/productDetail/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/order" element={<Orders/>}/>
          <Route path="/singleOrder/:id" element={<SingleOrder/>}/>

          
          <Route path="/auth" element={<Login/>} />
          <Route path="/ResetPassword/:token" element={<StaffResetPassword/>} />
          <Route path="/PasswordReport/:token" element={<StaffPasswordReport/>} />
          <Route path="/ForgotPassword" element={<StaffForgotPassword/>}/>

       {/* Protected Routes */}
       <Route
            path="/manager/*"
            element={
              <ProtectedRoute requiredRole="manager">
                <ManagerLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/operator/*"
            element={
              <ProtectedRoute requiredRole="operator">
                <OperatorLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logistics/*"
            element={
              <ProtectedRoute requiredRole="logistics">
                <LogisticsLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transporter/*"
            element={
              <ProtectedRoute requiredRole="transporter">
                <TransporterLayout />
              </ProtectedRoute>
            }
          />
          
          {/* Redirect any unknown route to login */}
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;