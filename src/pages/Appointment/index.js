import Navbar from "../../components/homepage/navbar";
import Appointment from "../../assets/pages/GoldSouk-Request-Appointment.png";

const Homepage = () => {
  return (
    <div>
      {/* <Headersection /> */}
      <Navbar />
      <div style={{ width: "100%" }}>
        <img src={Appointment} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
};
export default Homepage;
