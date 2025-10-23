import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
