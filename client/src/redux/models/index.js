import { combineReducers } from "redux";
import userAuth from "./userAuth";
import allProducts from "./products";

export default combineReducers({
  userAuth,
  allProducts,
});
