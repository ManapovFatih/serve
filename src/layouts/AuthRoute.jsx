import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({ children }) => {
  const auth = useSelector((state) => state?.auth?.isAuth);
  const status = useSelector((state) => state?.auth?.user?.status);
  return auth ? status == 1 ? children : <Navigate to="/activate" /> : <Navigate to="/login" />;
};

export default AuthRoute;
