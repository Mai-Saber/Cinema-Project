import React, { useEffect, useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let auth = sessionStorage.getItem("email");
  if (auth) {
    // window.location.href = "/movies";
    <redirect to="/movies" replace={true} />;
  } else {
    <Navigate to="/login" replace={true} />;
  }
};
export default ProtectedRoute;
