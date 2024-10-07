/* eslint-disable react/prop-types */
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ img, name, new_price, old_price, id }) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="item">
        <Link to={`/product/${id}`}>
          <img
            className="img-card"
            src={img}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </Link>

        <p>{name}</p>

        <div className="item-prices">
          <div className="item-price-new">{new_price}</div>
          <div className="item-price-old">{old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
