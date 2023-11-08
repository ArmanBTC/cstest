import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../Layout/pages/Index";
import Signup from "../Layout/pages/Signup";
import Signin from "../Layout/pages/Signin";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};

export default PublicRoutes;
