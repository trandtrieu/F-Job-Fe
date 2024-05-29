// services/api.js
import axios from "axios";

export const loginUser = (username, password) => {
  return axios.post("http://localhost:3443/users/login", {
    username,
    password,
  });
};

export const facebookLogin = (token) => {
  return axios.get("https://localhost:3886/users/facebook/token", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
