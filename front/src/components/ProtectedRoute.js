import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({isAllowed, children, redirectTo = "/"}) => {
  
  const user = useSelector((state) => state.user);
  
  if(!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return  children ? children : <Outlet/>;
};

