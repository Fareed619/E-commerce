import { api } from "../../utils";
import { allProducts } from "../../assets/all_products";
// action type

const GET_ALL_PRODUCTS = "products/GET_ALL_PRODUCTS";
const ADD_TO_CART = "products/ADD_TO_CART";
const REMOVE_FROM_CART = "products/REMOVE_FROM_CART";

export const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < allProducts.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

// to get total prices
// action creator

export const getProducts = () => async (dispatch) => {
  try {
    const products = await api.get("/product/allproducts");
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products.data,
    });
  } catch (err) {
    alert("getting all products failed");
  }
};

export const addToCart = (itemId) => async (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: itemId,
  });
};

export const removeFromCart = (itemId) => async (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: itemId,
  });
};

const intialState = {
  products: [],
  cart: getDefaultCart(),
  totalPrice: 0,
};
console.log("cart state", intialState.cart);
const reducer = (state = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: payload };

    case ADD_TO_CART:
      return {
        ...state,
        cart: { ...state.cart, [payload]: state.cart[payload] + 1 },
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: { ...state.cart, [payload]: state.cart[payload] - 1 },
      };

    default:
      return state;
  }
};

export default reducer;
