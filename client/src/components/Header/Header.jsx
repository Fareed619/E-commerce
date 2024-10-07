import "./Header.css";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/models/userAuth";
import { IoIosArrowDropdown } from "react-icons/io";

const Header = ({ isAuth, logout, cart }) => {
  //
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const menuRef = useRef();
  // menuRef.current.classList.add("name");

  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");

    e.target.classList.toggle("open");
  };

  const [meun, setMenu] = useState(path);
  const navigate = useNavigate();

  const handleLogin = () => {
    setMenu(null);
  };

  const getNumberProducts = () => {
    let quantity = 0;
    for (let item in cart) {
      if (cart[item] > 0) {
        quantity += cart[item];
      }
    }

    return quantity;
  };
  return (
    <div className="parent">
      <div className="navbar">
        <div className="div-all">
          <FaShoppingBag className="icon-img " />
          <a href="/" className="icon-text">
            Shopper
          </a>
        </div>
        <div className="dropdowm-nav" onClick={dropDown_toggle}>
          <IoIosArrowDropdown />
        </div>
        <div className="nav" ref={menuRef}>
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            {" "}
            <Link to="/shop">
              Shop {meun == "shop" ? <hr className="hr-nav" /> : null}
            </Link>{" "}
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            {" "}
            <Link to="/men">
              Men {meun == "men" ? <hr className="hr-nav" /> : null}
            </Link>{" "}
          </li>
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            {" "}
            <Link to="/women">
              Women {meun == "women" ? <hr className="hr-nav" /> : null}
            </Link>{" "}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            {" "}
            <Link to="/kids">
              Kids {meun == "kids" ? <hr className="hr-nav" /> : null}
            </Link>{" "}
          </li>
        </div>
        <div className="btn-login">
          {isAuth ? (
            <>
              <Link
                onClick={() => {
                  logout(navigate);
                }}
                className="btn-nav"
                to="/login"
              >
                logout
              </Link>
              <Link to="/cart">
                <MdOutlineShoppingCart
                  onClick={() => {
                    setMenu(null);
                  }}
                  className="count-sales"
                />
              </Link>
            </>
          ) : (
            <Link onClick={handleLogin} className="btn-nav" to="/login">
              login
            </Link>
          )}

          <div className="count-nav-sales">{getNumberProducts()}</div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.userAuth.isAuth,
    cart: state.allProducts.cart,
  };
};

export default connect(mapStateToProps, { logout })(Header);
