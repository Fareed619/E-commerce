import { api, setAuthToken } from "../../utils";

// action types
const LOGIN_SUCCESS = "userAuth/LOGIN_SUCCESS";
const LOGIN_FAIL = "userAuth/LOGIN_FAIL";

const REGISTER_SUCCESS = "userAuth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "userAuth/REGISTER_FAILURE";

const LOGOUT = "userAuth/LOGOUT";

const LOAD_AUTH = "userAuth/LOAD_AUTH";

// action creator

export const register = (form, navigate) => async (dispatch) => {
  try {
    const { data } = await api.post("/register", form);
    console.log(data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });

    alert("registeration success");
    navigate("/shop");
  } catch (err) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: err.message,
    });
  }
};

export const login = (form, navigate) => async (dispatch) => {
  try {
    const { data } = await api.post("/login", form);

    console.log("data", data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    alert("Create user success");
    navigate("/shop");
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message,
    });
    alert("error in register");
  }
};

export const loadAuth = () => async (dispatch) => {
  const { data } = await api.get("/loaduser");
  console.log(data);
  dispatch({
    type: LOAD_AUTH,
    payload: data,
  });
};

export const logout = (navigate) => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  navigate("/login");
};
// reducer

const initialState = {
  isAuth: false,
  error: "",
  userInfo: "",
  loading: true,
  token: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      setAuthToken(payload.token);
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        error: payload,
        loading: false,
      };
    case LOAD_AUTH:
      return {
        ...state,
        isAuth: true,
        loading: false,
        userInfo: payload,
      };
    case LOGOUT:
      setAuthToken();
      return {
        ...state,
        isAuth: false,
        userInfo: "",
      };

    default:
      return state;
  }
};

export default reducer;
