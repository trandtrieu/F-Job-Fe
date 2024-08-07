/*global FB*/

import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import useFacebookSDK from "../utils/useFacebookSDK";
import { UserContext } from "../utils/UserContext";
import { loginUser, facebookLogin, googleLogin } from "../services/api.js";
import { validatePassword } from "../utils/validate";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  useFacebookSDK(process.env.REACT_APP_FACEBOOK_APP_ID);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const token = urlParams.get("token");
    const email = urlParams.get("email");

    if (id && token && email) {
      const user = { id, token, email };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login successful!");
      history.push("/");
    }
  }, [history, setUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await loginUser(email, password);
      if (response.data.status === "OK") {
        toast.success("Login successful!");
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // history.push("/");
        window.location.href = "/";
      } else {
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
              <h3>LOGIN TO F-JOB</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {errors.password && (
                    <span className="error-text">{errors.password}</span>
                  )}
                </div>

                <div className="form-group">
                  <div className="field-outer">
                    <div className="input-group checkboxes square">
                      <input
                        type="checkbox"
                        name="remember-me"
                        id="remember"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
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
                  Don't have an account? <Link to="/register">Signup</Link>
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

export default Login;
