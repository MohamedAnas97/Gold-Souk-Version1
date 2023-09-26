import Logo from "../../assets/img/gold-souk-01-2.png";
import Name from "../../assets/img/logogold.png";
import Love from "../../assets/img/div.svg";
import Ham from "../../assets/img/hamburger.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  //
  const navigate = useNavigate();
  return (
    <div className="nav_container">
      <div className="navlogo">
        <img src={Logo} alt=""  onClick={() => navigate("/")} />
        <span>
          <img src={Name} alt=""  onClick={() => navigate("/")} />
        </span>
      </div>
      <div className="navlist">
        <ul>
          {" "}
          <li onClick={() => navigate("/market")}>
            <span>Jewellery</span>
          </li>
          <li onClick={() => navigate("/shop")}>
            <span>Shop</span>
          </li>
          <li onClick={() => navigate("/product")}>
            <span> Product</span>
          </li>
          <li onClick={() => navigate("/request-appointment")}>
            <span>Appointment</span>
          </li>
          <li onClick={() => navigate("/metaverse")}>
            <span>Metaverse</span>
          </li>
        </ul>
      </div>
      <div className="hamber">
        <img src={Ham} alt="" />
      </div>
      <div className="navlove">
        <img src={Love} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
