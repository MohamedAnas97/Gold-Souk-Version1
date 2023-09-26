import Navbar from "../../components/homepage/navbar";
import Shop from "../../assets/pages/GoldSouk-Shop.png";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ width: "100%" }}>
        <img src={Shop} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
};
export default Homepage;
