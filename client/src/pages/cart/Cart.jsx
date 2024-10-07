import "./cart.css";

import { CiCircleRemove } from "react-icons/ci";
import { allProducts } from "../../assets/all_products";
import { removeFromCart } from "../../redux/models/products";
import { connect } from "react-redux";

const Cart = ({ cart, removeFromCart }) => {
  const getTotalCartAmount = () => {
    let total = 0;
    for (let item in cart) {
      if (cart[item] > 0) {
        let price = allProducts.find((p) => p.id === Number(item));
        total += price.new_price * cart[item];
        
      }
    }
    return total;
  };
  return (
    <div className="cart">
      <div className="cart-top">
        <table>
          <thead>
            <tr className="tr-thead">
              <th>Products </th>
              <th>Title </th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <hr />

          {allProducts.map((p, i) => {
            if (cart[p.id] > 0) {
              return (
                <tbody key={i}>
                  <tr>
                    <td>
                      <img src={p.image} alt="" />
                    </td>
                    <td className="title">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempore, ea?
                    </td>
                    <td className="price">${p.new_price}</td>
                    <td className="quantity">{cart[p.id]}</td>
                    <td className="total">${p.new_price * cart[p.id]}</td>
                    <td className="remove">
                      <CiCircleRemove
                        className="btn-removeitem"
                        onClick={() => {
                          removeFromCart(p.id);
                        }}
                      />
                    </td>
                  </tr>
                  <hr style={{ width: "100%" }} />
                </tbody>
              );
            }
          })}
        </table>
      </div>
      <div className="cart-down">
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="subtotal">
            <p>Subtotal</p>
            <span>${getTotalCartAmount()}</span>
          </div>
          <hr />
          <div className="Shipping-free">
            <p>Shipping Free</p>
            <span>free</span>
          </div>
          <hr />

          <div className="Total">
            <p>Total</p>
            <span style={{ fontSize: "18px", fontWeight: 600 }}>
              ${getTotalCartAmount()}
            </span>
          </div>
          <button className="checkout"> PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo-code">
          <label htmlFor="code">if you have a promo code enter it here </label>
          <div>
            <input type="text" id="code" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.allProducts.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
