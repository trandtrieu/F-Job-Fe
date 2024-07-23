/*global FB*/

import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import useFacebookSDK from "../../utils/useFacebookSDK";
import { UserContext } from "../../utils/UserContext";
import {
  loginRecruiter,
  facebookLogin,
  googleLogin,
} from "../../services/api.js";

const LoginRecruiter = () => {
  const [emailRecruiter, setEmailRecruiter] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { setRecruiter } = useContext(UserContext);
  const history = useHistory();

  useFacebookSDK(process.env.REACT_APP_FACEBOOK_APP_ID);

  const handleEmailChange = (e) => setEmailRecruiter(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const token = urlParams.get("token");
    const emailRecruiter = urlParams.get("emailRecruiter");

    if (userId && token && emailRecruiter) {
      const user = { userId, token, emailRecruiter };
      setRecruiter(user);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login successful!");
      history.push("/");
      toast.success("Login successful!");
    }
  }, [history, setRecruiter]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginRecruiter(emailRecruiter, password);
      console.log(response.data);
      if (response.data.status === "OK") {
        setRecruiter(response.data.recruiter);
        localStorage.setItem(
          "recruiter",
          JSON.stringify(response.data.recruiter)
        );
        console.log(response.data.recruiter);
        toast.success("Login successful!");
        window.location.href = "/";
      } else {
        console.log("Login Fail");
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
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
          setRecruiter(user);
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

  const handleGoogleLogin = () => {
    window.open(`http://localhost:3005/api/user/google/callback`, "_self");
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
              <h3>Login with Recruiter</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="emailRecruiter"
                    placeholder="Email"
                    value={emailRecruiter}
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
                <div className="text">
                  Don't have an account?{" "}
                  <Link to="/register-recruiter">Signup</Link>
                </div>
                <div className="divider">
                  <span>or</span>
                </div>
                <div className="btn-box row">
                  <div className="col-lg-6 col-md-12">
                    <button
                      onClick={handleFacebookLogin}
                      className="theme-btn social-btn-two facebook-btn"
                    >
                      <i className="fab fa-facebook-f" /> Log In via Facebook
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <button
                      onClick={handleGoogleLogin}
                      className="theme-btn social-btn-two google-btn"
                    >
                      <i className="fab fa-google" /> Log In via Gmail
                    </button>
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

export default LoginRecruiter;
