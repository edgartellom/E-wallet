import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { admin: true };

  return auth.admin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
