import Navbar from "../../components/homepage/navbar";
import MarketPLace from "../../assets/pages/GoldSouk-Home.png";

const Homepage = () => {
  return (
    <div>
      {/* <Headersection /> */}
      <Navbar />
      <div style={{ width: "100%" }}>
        <img src={MarketPLace} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
};
export default Homepage;
