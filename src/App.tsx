import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Layout/navbar/Navbar";
import PublicRoutes from "./routes/PublicRoutes";
import Footer from "./Layout/footer/Footer";
import { useThemeHook } from "./theme/ThemeHook";

function App() {
  useThemeHook();

  useEffect(() => {
    const sesionvalue = sessionStorage.getItem("test");
    if (sesionvalue !== null) {
    } else {
      alert("Add New Session data");
      sessionStorage.setItem("test", new Date(Date.now() * 1000).toString());
    }
  }, []);

  return (
    <div className="container App">
      <Navbar />
      <PublicRoutes />
      <Footer />
    </div>
  );
}

export default App;
