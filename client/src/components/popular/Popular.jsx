import "./popular.css";
import Card from "../card/Card";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
const Popular = ({ all_products }) => {
  const [popularInwoman, setPopularInwoman] = useState([]);
  useEffect(() => {
    getNewCollections();
  }, [all_products]);
  const getNewCollections = () => {
    const new_collections = all_products.filter((p) => p.category === "women");
    const filterd = new_collections.slice(0, 8);
    setPopularInwoman(filterd);
  };
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr style={{ borderTop: "2px solid black", width: "10%" }} />
      <div className="popular-item">
        {popularInwoman.map((product, index) => {
          return (
            <Card
              key={index}
              id={product.id}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
              img={product.image}
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

export default connect(mapStateToProps, null)(Popular);
