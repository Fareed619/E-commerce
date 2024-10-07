import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container-footer">
          <div className="flex-for-all">
            <FaShoppingBag className="icon-img " />
            <a href="/" className="icon-text" style={{ fontWeight: "600" }}>
              Shopper
            </a>
          </div>
          <ul
            className="flex-for-all links-footer"
            
          >
            <li>Company</li>
            <li>products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex-for-all" style={{ fontSize: "25px" }}>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
          </div>

          <hr style={{border:"none", borderRadius:"10px", height:"3px", backgroundColor:"#c7c7c7", margin:"20px 0"}}/>
          <div style={{marginBottom:"10px"}}>
            <h4>Copyright &copy; 2024 -All Right Reserved.</h4>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
