import "./newCollections.css";
import Card from "../card/Card";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const NewCollections = ({ all_products }) => {
  const [newCollections, setNewCollections] = useState([]);
  useEffect(() => {
    getNewCollections();
    console.log("new ", newCollections);
  }, [all_products]);
  const getNewCollections = () => {
    const new_collections = all_products.slice(0).slice(-8);
    setNewCollections(new_collections);
  };
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr
        style={{ borderTop: "2px solid black", width: "10%", margin: "8px 0" }}
      />
      <div className="collections" >
        {newCollections.map((product, index) => {
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

export default connect(mapStateToProps, null)(NewCollections);
