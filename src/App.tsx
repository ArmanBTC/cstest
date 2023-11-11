import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Layout/navbar/Navbar";
import PublicRoutes from "./routes/PublicRoutes";
import Footer from "./Layout/footer/Footer";
import { useThemeHook } from "./theme/ThemeHook";
import { useAppDispatch } from "./appRedux/store";
import { GetUserAsync } from "./appRedux/appSlises/userSlice/ActionCreateorUser";
import { useAppSelector } from "./appRedux/store";

function App() {
  useThemeHook();
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector((stete) => stete.user.isAuthorized);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!isAuthorized && token !== null) dispatch(GetUserAsync());
  }, [dispatch]);

  return (
    <div className="container App">
      <Navbar />
      <PublicRoutes />
      <Footer />
    </div>
  );
}

export default App;
