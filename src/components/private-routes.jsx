import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAppSelector } from "../redux/store";

export const PrivateRoute = () => {
  const loggedin = useAppSelector((state) => state.loggedIn);
  const location = useLocation();

  /* будет показывать страницу только в том случае, если пользователь вошел в систему */
  return loggedin ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
