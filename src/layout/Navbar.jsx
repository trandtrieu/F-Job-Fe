import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <>
      <div className="body-wrapper">
        <header className="main-header">
          {/* Main box */}
          <div className="main-box">
            {/*Nav Outer */}
            <div className="nav-outer">
              <div className="logo-box">
                <div className="logo">
                  <a href="index.html">
                    <img src="../assets/images/logo.svg" alt="" title />
                  </a>
                </div>
              </div>
              <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                  <li className="current dropdown">
                    <span>Home</span>
                    <div className="mega-menu">
                      <div className="mega-menu-bar row pt-0">
                        <div className="column col-lg-3 col-md-3 col-sm-12">
                          <ul>
                            <li className="current">
                              <a href="/">Home Page 01</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home Page 02</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-3 col-sm-12">
                          <ul>
                            <li>
                              <a href="index-6.html">Home Page 06</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-3 col-sm-12">
                          <ul>
                            <li>
                              <a href="index-11.html">Home Page 11</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-3 col-sm-12">
                          <ul>
                            <li>
                              <a href="index-16.html">Home Page 16</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown has-mega-menu" id="has-mega-menu">
                    <span>Find Jobs</span>
                    <div className="mega-menu">
                      <div className="mega-menu-bar row">
                        <div className="column col-lg-3 col-md-3 col-sm-12">
                          <h3>Jobs Listing</h3>
                          <ul>
                            <li>
                              <a href="job-list-v1.html">Jobs List – v1</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-3 col-sm-12">
                          <ul>
                            <li>
                              <a href="job-list-v6.html">Jobs List – v6</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-3 col-sm-12">
                          <ul>
                            <li>
                              <a href="job-list-v11.html">Jobs List – v11</a>
                            </li>
                            <li>
                              <a href="job-list-v12.html">Jobs List – v12</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-3 col-sm-12">
                          <h3>Jobs Single</h3>
                          <ul>
                            <li>
                              <a href="job-single.html">Job Single v1</a>
                            </li>
                            <li>
                              <a href="job-single-2.html">Job Single v2</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <span>Employers</span>
                    <ul>
                      <li className="dropdown">
                        <span>Employers List</span>
                        <ul>
                          <li>
                            <a href="employers-list-v1.html">
                              Employers LIst v1
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <span>Employers Single</span>
                        <ul>
                          <li>
                            <a href="employers-single-v1.html">
                              Employers Single v1
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="dashboard.html">Employers Dashboard</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <span>Candidates</span>
                    <ul>
                      <li className="dropdown">
                        <span>Candidates List</span>
                        <ul>
                          <li>
                            <a href="candidates-list-v1.html">
                              Candidates LIst v1
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <span>Candidates Single</span>
                        <ul>
                          <li>
                            <a href="candidates-single-v1.html">
                              Candidates Single v1
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="candidate-dashboard.html">
                          Candidates Dashboard
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <span>Pages</span>
                    <ul>
                      <li className="dropdown">
                        <span>Shop</span>
                        <ul>
                          <li>
                            <a href="shop.html">Shop List</a>
                          </li>
                          <li>
                            <a href="shop-single.html">Shop Single</a>
                          </li>
                          <li>
                            <a href="shopping-cart.html">Shopping Cart</a>
                          </li>
                          <li>
                            <a href="shop-checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="order-completed.html">Order Completed</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="/profileCandidate">Profile</a>
                      </li>
                      <li>
                        <a href="faqs.html">FAQ's</a>
                      </li>
                      <li>
                        <a href="terms.html">Terms</a>
                      </li>
                      <li>
                        <a href="invoice.html">Invoice</a>
                      </li>
                      <li>
                        <a href="elements.html">Ui Elements</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </li>
                  {/* Only for Mobile View */}
                  <li className="mm-add-listing">
                    <a href="job-post" className="theme-btn btn-style-one">
                      Job Post
                    </a>
                    <span>
                      <span className="contact-info">
                        <span className="phone-num">
                          <span>Call us</span>
                          <a href="tel:1234567890">123 456 7890</a>
                        </span>
                        <span className="address">
                          329 Queensberry Street, North Melbourne VIC <br />
                          3051, Australia.
                        </span>
                        <a href="mailto:support@superio.com" className="email">
                          support@superio.com
                        </a>
                      </span>
                      <span className="social-links">
                        <a href="#">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <span className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <span className="fab fa-linkedin-in" />
                        </a>
                      </span>
                    </span>
                  </li>
                </ul>
              </nav>
              {/* Main Menu End*/}
            </div>
            <div className="outer-box">
              {/* Add Listing */}
              <a href="/cvs" className="upload-cv">
                {" "}
                Upload your CV
              </a>
              {/* Login/Register */}
              <div className="btn-box">
                <a
                  href="/login"
                  className="theme-btn btn-style-three call-modal"
                >
                  Login / Register
                </a>
                <a href="/job-post" className="theme-btn btn-style-one">
                  Job Post
                </a>
              </div>
              <div className="btn-box">
                <a
                  href="/login"
                  className="theme-btn btn-style-three call-modal"
                >
                  {user ? (
                    <div>
                      <p>Welcome, {user.email}</p>
                      <button onClick={handleLogout}>Log out</button>
                    </div>
                  ) : (
                    <p>Login / Register</p>
                  )}
                </a>
              </div>
            </div>
          </div>
          {/* Mobile Header */}
          <div className="mobile-header">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.svg" alt="" title />
              </a>
            </div>
            {/*Nav Box*/}
            <div className="nav-outer clearfix">
              <div className="outer-box">
                {/* Login/Register */}
                <div className="login-box">
                  <a href="login-popup.html" className="call-modal">
                    <span className="icon-user" />
                  </a>
                </div>
                <a href="#nav-mobile" className="mobile-nav-toggler">
                  <span className="flaticon-menu-1" />
                </a>
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
          <div id="nav-mobile" />
        </header>
      </div>
    </>
  );
}
