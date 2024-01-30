import React from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  console.log("Check user in Private: ", token);
  if (!token) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

export default ProtectedRoute;
