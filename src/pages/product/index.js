import Navbar from "../../components/homepage/navbar";
import MarketPLace from "../../assets/pages/Gold-Souk-Product-page.png";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ width: "100%" }}>
        <img src={MarketPLace} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
};
export default Homepage;
