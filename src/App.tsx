import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Layout/navbar/Navbar";
import PublicRoutes from "./routes/PublicRoutes";
import Footer from "./Layout/footer/Footer";

function App() {
  return (
    <div className="container App">
      <Navbar />

      <PublicRoutes />

      <Footer />
    </div>
  );
}

export default App;
