import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ProtectedRoute = ({ children, requiredRole }) => {
    const getUser = localStorage.getItem('user'); ; 
    const user = jwt_decode(getUser);
  


  if (!user || user.role !== requiredRole) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
