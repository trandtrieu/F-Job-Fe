import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { validatePassword } from "../utils/validate"; // Import the validation function

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

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

    // Construct the payload for the API request
    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3005/api/user/sign-up",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        console.log("Registration successful", data);
        history.push("/login");
        toast.success("Registration successful");
      } else {
        const errorData = response.data;
        console.error("Registration failed", errorData);
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred while registering", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="login-section">
        <div
          className="image-layer"
          style={{
            backgroundImage: "url(../assets/images/background/12.jpg)",
          }}
        />
        <div className="outer-box">
          <div className="login-form default-form">
            <div className="form-inner">
              <h3>Create a Free F-Job Account</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    id="password-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {errors.password && (
                    <span className="error-text">{errors.password}</span>
                  )}
                </div>

                <div className="form-group">
                  <button
                    className="theme-btn btn-style-one"
                    type="submit"
                    name="Register"
                  >
                    Register
                  </button>
                </div>
              </form>

              <div className="bottom-box">
                <div className="divider">
                  <span>or</span>
                </div>
                <div className="btn-box row">
                  <div className="col-lg-6 col-md-12">
                    <a
                      href="#"
                      className="theme-btn social-btn-two facebook-btn"
                    >
                      <i className="fab fa-facebook-f" /> Log In via Facebook
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <a href="#" className="theme-btn social-btn-two google-btn">
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
  );
}
