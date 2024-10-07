/* eslint-disable react/prop-types */
import "./shopCategory.css";
import ButtonComponent from "../../components/Button/ButtonComponent";

import { FaSortDown } from "react-icons/fa";
import menImg from "../../assets/men01.png";
import womenImg from "../../assets/woman05-removebg.png";
import kidImg from "../../assets/product_27-removebg-preview.png";
import Card from "../../components/card/Card";

import { api } from "../../utils";
import { useEffect, useState } from "react";
const ShopCategory = ({ category }) => {
  const [banner, setBanner] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category === "men") {
      getMen();
      setLoading(false);
    } else if (category === "women") {
      getWomen();
      setLoading(false);
    } else {
      getKid();
      setLoading(false);
    }
  }, [category]);
  const getMen = async () => {
    const menProducts = await api.get("/product/men/products");
    console.log(menProducts.data);
    setBanner(menProducts.data);
  };
  const getWomen = async () => {
    const womenProducts = await api.get("/product/women/products");
    console.log(womenProducts.data);
    setBanner(womenProducts.data);
  };
  const getKid = async () => {
    const kidProducts = await api.get("/product/kid/products");
    console.log(kidProducts.data);
    setBanner(kidProducts.data);
  };
  return (
    <div className="shop-category">
      <div className="header-shopcategory">
        <div className="header-left">
          <h1>
            <span>FLAT 50% OFF</span>
          </h1>
          <h5>
            <span>12</span> Hours <span>20</span> Mins
          </h5>
          <ButtonComponent text="Explore New" />
        </div>
        <img
          src={
            category === "women"
              ? womenImg
              : category === "men"
              ? menImg
              : kidImg
          }
          alt=""
          className="img-shopcategory"
        />
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="sort-by">
          <div>
            Sort by <FaSortDown />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loader-div">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          {" "}
          <div className="shopcategory-products">
            {banner
              ? banner.map((product, index) => {
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
                })
              : null}
          </div>
          <div className="shopcategory-loadmore">
            <ButtonComponent text="Explore More" color="#787878" />
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCategory;
