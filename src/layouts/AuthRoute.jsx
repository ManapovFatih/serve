import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const status = useSelector((state) => state?.auth.user.status);
  return auth.isAuth ? status ? children : <Navigate to="/activate" /> : <Navigate to="/login" />;
};

export default AuthRoute;
