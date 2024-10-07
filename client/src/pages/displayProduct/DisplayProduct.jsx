/* eslint-disable react/prop-types */
import Breadcrum from "../../components/Breadcrum/Breadcrum";
import Product from "../product/Product";
import "./displayProduct.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RelatedProducts from "../../components/relatedProducts/RelatedProducts";
import { connect } from "react-redux";

const DisplayProduct = ({ all_products }) => {
  const [productInfo, setProductInfo] = useState({
    category: "",
    name: "",
    ProductId: "",
  });
  const { name, category, ProductId } = productInfo;
  const { id } = useParams();
  useEffect(() => {
    all_products.map((p) => {
      if (p.id === Number(id)) {
        setProductInfo({
          ...productInfo,
          category: p.category,
          name: p.name,
          ProductId: p.id,
        });
      }
    });
  }, []);
  return (
    <div>
      <Breadcrum category={category} name={name} />
      <Product category={category} productId={ProductId} />
      <RelatedProducts category={category} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    all_products: state.allProducts.products,
  };
};
export default connect(mapStateToProps, null)(DisplayProduct);
