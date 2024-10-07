/* eslint-disable react/prop-types */
import "./product.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { allProducts } from "../../assets/all_products";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/models/products";

const Product = ({
  category,
  addToCart,
  productId,
  cart,
  removeFromCart,
  all_products,
}) => {
  const { id } = useParams();

  const product = all_products.find((p) => p.id === Number(id));
  console.log(cart);

  return (
    <div className="product">
      <div className="product-top">
        <div className="product-imgs">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            <img src={product.image} alt="" className="img-small" />
            <img src={product.image} alt="" className="img-small" />
            <img src={product.image} alt="" className="img-small" />
            <img src={product.image} alt="" className="img-small" />
          </div>
          <img src={product.image} alt="" className="img-big" />
        </div>
        <div className="product-info">
          <p className="type-clothes">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
            libero!
          </p>
          <div
            style={{
              marginTop: "7px",
              display: "flex",
              textAlign: "center",
              gap: "2px",
            }}
          >
            <MdOutlineStarPurple500 className="star" />
            <MdOutlineStarPurple500 className="star" />
            <MdOutlineStarPurple500 className="star" />
            <MdOutlineStarPurple500 className="star" />
            <IoStarHalfOutline className="star" />
            (122)
          </div>
          <div style={{ display: "flex", gap: "9px", margin: "1.5rem 0" }}>
            <div className="produc-oldprice">$120</div>
            <div className="produc-newprice">$82</div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aut
              sit placeat asperiores mollitia totam facilis temporibus dolorum
              quo voluptas vel nostrum necessitatibus earum maxime obcaecati,
              magnam, error quaerat! Unde.
            </p>
          </div>

          <div className="sizes">
            <p>Select Size</p>
            <div className="select-size">
              {" "}
              <span>S</span> <span>M</span> <span>L</span> <span>XL</span>{" "}
              <span>XXL</span>
            </div>
            <button
              onClick={() => {
                addToCart(id);
              }}
            >
              add to cart
            </button>

            <div className="extra-info">
              <p>
                <span> Category: </span>
                {category}
              </p>
              <p>
                <span>Tag: </span> Modern, Latest
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <div>
          <p>Description</p>
          <p>Reviews (122)</p>
        </div>
        <p className="des">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
          perspiciatis quidem illo numquam vitae deserunt doloribus sint cum
          ullam. A assumenda quos culpa voluptate optio at quo, consequuntur
          aperiam sed! Blanditiis obcaecati perferendis quae voluptatibus
          exercitationem totam sint incidunt labore unde tempore illo, nobis ex,
          dicta vel enim quod accusantium?
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.allProducts.cart,
    all_products: state.allProducts.products,
  };
};
export default connect(mapStateToProps, { addToCart, removeFromCart })(Product);
