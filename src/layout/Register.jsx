import React from "react";

export default function Register() {
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
                <h3>Create a Free Superio Account</h3>
                {/*Login Form*/}
                <form
                  method="post"
                  action="https://creativelayers.net/themes/superio/add-parcel.html"
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
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      id="password-field"
                      type="password"
                      name="password"
                      defaultValue
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="theme-btn btn-style-one "
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
