/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/login/Login";
import Shop from "./pages/shop/Shop";

import Register from "./pages/register/Register";
// import Footer from './components/Footer/Footer';
import Home from "./pages/home/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { loadAuth } from "./redux/models/userAuth";
import { setAuthToken } from "./utils";
import Footer from "./components/Footer/Footer";
import ShopCategory from "./pages/shop-category/ShopCategory.jsx";
import { popularInwoman } from "./assets/all_products";
import { newCollections } from "./assets/all_products";

import DisplayProduct from "./pages/displayProduct/DisplayProduct.jsx";
import Cart from "./pages/cart/Cart.jsx";
import { getProducts } from "./redux/models/products.js";
function App() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      setAuthToken(token);
    }
    store.dispatch(loadAuth());
    store.dispatch(getProducts());
  }, [token]);

  console.log(store.getState());

  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/men" element={<ShopCategory category="men" />} />
            <Route path="/women" element={<ShopCategory category="women" />} />
            <Route path="/kids" element={<ShopCategory category="kids" />} />
            <Route path="/product/:id" element={<DisplayProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
