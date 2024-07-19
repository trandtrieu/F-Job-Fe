// services/api.js
import axios from "axios";

export const loginUser = (email, password) => {
  return axios.post("http://localhost:3005/api/user/login", {
    email,
    password,
  });
};

export const facebookLogin = (token) => {
  return axios.get("https://localhost:3886/users/facebook/token", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
