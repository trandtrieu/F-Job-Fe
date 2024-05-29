import React, { useRef, useState } from "react";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitButtonRef = useRef(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the payload for the API request
    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3005/api/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful", data);
        // Handle successful registration (e.g., redirect to login page, show success message)
      } else {
        const errorData = await response.json();
        console.error("Registration failed", errorData);
        // Handle registration error (e.g., show error message)
      }
    } catch (error) {
      console.error("An error occurred while registering", error);
      // Handle fetch error (e.g., show error message)
    }
  };


  return (
    <>
      <div className="page-wrapper">
        <div className="login-section">
          <div
            className="image-layer"
            style={{
              backgroundImage: "url(../assets/images/background/12.jpg)",
            }}
          />

          <div className="outer-box">
            {/* Login Form */}
            <div className="login-form default-form">
              <div className="form-inner">
                <h3>Create a Free F-Job Account</h3>
                {/*Login Form*/}

                <form
                  // method="post"
                  onChange={handleSubmit}
                // action="https://creativelayers.net/themes/superio/add-parcel.html"
                >
                  <div className="form-group">
                    <div className="btn-box row">
                      <div className="col-lg-6 col-md-12">
                        <a href="/" className="theme-btn btn-style-seven">
                          <i className="la la-user" /> Candidate{" "}
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <a href="/" className="theme-btn btn-style-four">
                          <i className="la la-briefcase" /> Employer{" "}
                        </a>
                      </div>
                    </div>
                  </div>

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
                  </div>

                  <div className="form-group">
                    <button
                      className="theme-btn btn-style-one "
                      type="submit"
                      name="Register"
                      ref={submitButtonRef}
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
            {/*End Login Form */}
          </div>
        </div>
        {/* End Info Section */}
      </div>
      {/* End Page Wrapper */}
    </>
  );
}

