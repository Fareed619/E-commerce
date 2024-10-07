import "./sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/add-product-icon.png";
import product_icon_list from "../../assets/product-list.jpg";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/addproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img
            src={add_product_icon}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct" style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img
            src={product_icon_list}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
