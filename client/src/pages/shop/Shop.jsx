import img01 from "../../assets/img-shop.jpg";

import woman05 from "../../assets/woman05-removebg.png";
import { connect } from "react-redux";

import "./shop.css";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { useEffect } from "react";
import Popular from "../../components/popular/Popular";
import NewCollections from "../../components/newCollections/NewCollections";
const Shop = ({ all_products }) => {
  // console.log(all_products.slice(1).slice(-8));

  return (
    <>
      {/* first section introduction */}
      <div className="section-shop">
        <div className="shop-first-section">
          <div>
            <p>new arrivals only</p>
            <h1>new collections for everyone 👋 </h1>
            <ButtonComponent text="Latest Collection → " />
          </div>

          <img className="img-shopsection" src={img01} alt="" />
        </div>
      </div>

      {/* second section popular in women */}

      <Popular />

      {/* third section offers */}
      <section className="offers-section">
        <div className="contain">
          <div className="inside-contain">
            <h1>Exclusive Offers For You</h1>
            <p>Only On Best sellers products</p>
            <ButtonComponent text="Check Now" />
          </div>
          <div>
            <img src={woman05} />
          </div>
        </div>
      </section>

      {/* Fourth section new collection */}

      <NewCollections />

      {/* Fivth section email */}
      <section className="your-email">
        <div className="container-5sec">
          <h1>get exclusive offers on your email</h1>
          <h6>subscribe to our newsletter and stay updated</h6>
          <div>
            <input type="email" placeholder="Your Email id" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    all_products: state.allProducts.products,
  };
};

export default connect(mapStateToProps, null)(Shop);
