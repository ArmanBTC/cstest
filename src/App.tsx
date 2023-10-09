import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Navbar from "./Layout/navbar/Navbar";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <div className="container App">
      <Navbar />

      <PublicRoutes />
    </div>
  );
}

export default App;
