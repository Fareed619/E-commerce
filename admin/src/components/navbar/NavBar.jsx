import "./navbar.css";
import { FaShoppingBag } from "react-icons/fa";
import navProfile from "../../assets/nav-profile-.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <FaShoppingBag className="nav-logo" />
        <a href="/" className="icon-text">
          Shopper
        </a>
      </div>
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};

export default NavBar;
