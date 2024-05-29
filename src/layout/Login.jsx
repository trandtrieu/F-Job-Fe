import React from "react";

export default function Login() {
  return (
    <>
      <div className="page-wrapper">
        {/*End Main Header */}
        {/* Info Section */}
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
                <h3>Login to Superio</h3>
                {/*Login Form*/}
                <form
                  method="post"
                  action="https://creativelayers.net/themes/superio/add-parcel.html"
                >
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
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
                    <div className="field-outer">
                      <div className="input-group checkboxes square">
                        <input
                          type="checkbox"
                          name="remember-me"
                          defaultValue
                          id="remember"
                        />
                        <label htmlFor="remember" className="remember">
                          <span className="custom-checkbox" /> Remember me
                        </label>
                      </div>
                      <a href="#" className="pwd">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      className="theme-btn btn-style-one"
                      type="submit"
                      name="log-in"
                    >
                      Log In
                    </button>
                  </div>
                </form>
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
    </>
  );
}
