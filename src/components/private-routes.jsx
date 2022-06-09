import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAppSelector } from "../redux/store";

export const PrivateRoute = () => {
  const loggedin = useAppSelector((state) => state.loggedIn);
  const location = useLocation();

  return loggedin ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
