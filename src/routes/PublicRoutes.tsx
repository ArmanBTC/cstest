import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../Layout/pages/Index";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default PublicRoutes;
