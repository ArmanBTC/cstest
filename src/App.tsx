import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Layout/navbar/Navbar";
import PublicRoutes from "./routes/PublicRoutes";
import Footer from "./Layout/footer/Footer";
import { useThemeHook } from "./theme/ThemeHook";

function App() {
  useThemeHook();
  return (
    <div className="container App">
      <Navbar />
      <PublicRoutes />
      <Footer />
    </div>
  );
}

export default App;
