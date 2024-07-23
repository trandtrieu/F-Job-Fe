// services/api.js
import axios from "axios";

export const loginUser = (email, password) => {
  return axios.post("http://localhost:3005/api/user/login", {
    email,
    password,
  });
};

export const loginRecruiter = (emailRecruiter, password) => {
  return axios.post("http://localhost:3005/recruiter/login-recruiter", {
    emailRecruiter,
    password,
  });
};

export const facebookLogin = (token) => {
  return axios.get("https://localhost:3448/api/user/facebook/token", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const googleLogin = () => {
  return axios.get("http://localhost:3005/api/user/google/callback", {
    withCredentials: true,
  });
};
