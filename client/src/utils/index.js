import axios from "axios";

const baseUrl = "https://e-commerce-server-jhdo.onrender.com";

export const api = axios.create({
  baseURL: `${baseUrl}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true
});

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    api.defaults.headers.common["x-token"] = token;
  } else {
    localStorage.removeItem("token");
    delete api.defaults.headers["x-token"];
  }
};
