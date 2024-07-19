/*global FB*/

import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import useFacebookSDK from "../utils/useFacebookSDK";
import { UserContext } from "../utils/UserContext";
import { loginUser, facebookLogin } from "../services/api.js";

const Login = () => {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  useFacebookSDK(process.env.REACT_APP_FACEBOOK_APP_ID);

  // const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = async (e) => {
    console.log("hello");

    e.preventDefault();
    try {
      console.log("info:", email + " " + password);

      const response = await loginUser(email, password);

      if (response.data.status === "OK") {
        toast.success("Login successful!");
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(response.data.user);
        history.push("/");
      } else {
        console.log("fail login");
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const checkLoginState = () => {
    FB.getLoginStatus((response) => {
      statusChangeCallback(response);
    });
  };

  const statusChangeCallback = async (response) => {
    if (response.status === "connected") {
      const accessToken = response.authResponse.accessToken;
      try {
        const fbResponse = await facebookLogin(accessToken);
        if (fbResponse.data.success) {
          const user = fbResponse.data.user;
          setUser(user);
          toast.success("Logged in with Facebook!");
          history.push("/");
        } else {
          toast.error("Failed to log in with Facebook.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("Failed to log in with Facebook.");
    }
  };

  const handleFacebookLogin = () => {
    FB.login(checkLoginState, { scope: "public_profile,email" });
  };

  return (
    <div className="page-wrapper">
      <div className="login-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(../assets/images/background/12.jpg)" }}
        />
        <div className="outer-box">
          <div className="login-form default-form">
            <div className="form-inner">
              <h3>Login to Superio</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="field-outer">
                    <div className="input-group checkboxes square">
                      <input
                        type="checkbox"
                        name="remember-me"
                        id="remember"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                      />
                      <label htmlFor="remember" className="remember">
                        <span className="custom-checkbox" /> Remember me
                      </label>
                    </div>
                    <Link to="/forgot-password" className="pwd">
                      Forgot Password
                    </Link>
                  </div>
                </div>
                <div className="form-group">
                  <button className="theme-btn btn-style-one" type="submit">
                    Log In
                  </button>
                </div>
              </form>
              <div className="bottom-box">
                {/* <div className="text">
                  Don't have an account? <Link to="/register">Signup</Link>
                </div>
                <div className="divider">
                  <span>or</span>
                </div> */}
                <div className="btn-box row">
                  {/* <div className="col-lg-6 col-md-12">
                    <button
                      onClick={handleFacebookLogin}
                      className="theme-btn social-btn-two facebook-btn"
                    >
                      <i className="fab fa-facebook-f" /> Log In via Facebook
                    </button>
                  </div> */}
                  <div className="bottom-box">
                    <div className="text">
                      Don't have an account? <a href="/register">Signup</a>
                    </div>
                    <div className="divider">
                      <span>or</span>
                    </div>
                    <div className="btn-box row">
                      <div className="col-lg-6 col-md-12">
                        <a
                          href="#"
                          className="theme-btn social-btn-two facebook-btn"
                        >
                          <i className="fab fa-facebook-f" /> Log In via
                          Facebook
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <a
                          href="#"
                          className="theme-btn social-btn-two google-btn"
                        >
                          <i className="fab fa-google" /> Log In via Gmail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
