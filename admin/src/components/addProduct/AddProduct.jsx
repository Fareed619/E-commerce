import "./addproduct.css";
import upload_area from "../../assets/upload-file.webp";
import { useState } from "react";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetailes] = useState({
    name: "",
    image: "",
    category: "",
    old_price: "",
    new_price: "",
  });
  const changeHandler = (e) => {
    setProductDetailes({ ...productDetails, [e.target.name]: e.target.value });
  };
  const imgHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    const imgResponse = await fetch(
      "http://localhost:4000/api/product/upload",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      }
    );
    let jsonImg = await imgResponse.json();
    responseData = jsonImg;
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      const addProducts = await fetch(
        "http://localhost:4000/api/product/addproduct",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      const resProducts = await addProducts.json();
      if (resProducts.msg === "success") {
        alert("Product Added");
      } else {
        alert("Failed");
      }
    }
  };
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          value={productDetails.name}
          onChange={changeHandler}
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            placeholder="Type here"
            value={productDetails.old_price}
            onChange={changeHandler}
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            name="new_price"
            placeholder="Type here"
            value={productDetails.new_price}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select
          name="category"
          className="add-product-selector"
          value={productDetails.category}
          onChange={changeHandler}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="addproduct-thumnail-img"
          />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          hidden
          onChange={imgHandler}
        />
      </div>

      <button className="addproduct-btn" onClick={addProduct}>
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
