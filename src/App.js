import "./styles/index.css";
import Homepage from "./pages/homepage/homepage";
import MarketPlace from "./pages/marketPlace";
import Product from "./pages/product";
import Appointment from "./pages/Appointment";
import Metaverse from "./pages/Metaverse/metaverse";
import Shop from "./pages/shop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/market" element={<MarketPlace />} />
        <Route path="/product" element={<Product />} />
        <Route path="/request-appointment" element={<Appointment />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/metaverse" element={<Metaverse />} />
      </Routes>
    </div>
  );
}

export default App;
