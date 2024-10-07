/* eslint-disable react/prop-types */
import "./relatedProducts.css";
import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { connect } from "react-redux";

const RelatedProducts = ({ category, all_products }) => {
  const [related, setRelated] = useState([]);
  useEffect(() => {
    relatedBanner();
  }, [category]);
  const relatedBanner = () => {
    const men_products = all_products.filter((p) => p.category === category);
    const men_limited = men_products.slice(0, 4);
    console.log(men_limited);
    setRelated(men_limited);
  };
  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-allproducts" >
        {related.map((product, index) => {
          return (
            <Card
              key={index}
              img={product.image}
              name={product.name}
              old_price={product.old_price}
              new_price={product.new_price}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    all_products: state.allProducts.products,
  };
};

export default connect(mapStateToProps, null)(RelatedProducts);
