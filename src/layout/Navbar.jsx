import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import { toast } from "react-toastify";
import Modal from "react-modal";
import "../assest/css/navbar.css";
Modal.setAppElement("#root");

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [userRole, setUserRole] = useState("null");
  const [showAlert, setShowAlert] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const userJSON = localStorage.getItem("user");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      if (user && user.role) {
        const userRole = user.role;
        setUserRole(userRole);
      }
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (userRole === "user" || userRole === "null") {
      // toast.warn("You cannot access this page");
      setIsModalOpen(true); // Open the modal
    } else {
      window.location.href = "/job-post";
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="body-wrapper">
        <header className="main-header">
          <div className="main-box">
            <div className="nav-outer">
              <div className="logo-box">
                <div className="logo">
                  <a href="/">
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
                        <div
                          className="column col-lg-3 col-md-3 col-sm-12"
                          style={{ zIndex: "999" }}
                        >
                          <h3>Jobs Listing</h3>
                          <ul>
                            <li>
                              <a href="/job-list">Jobs List – v1</a>
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
                    <a href="/dashboard-recruiter">
                      <span>Recruiter</span>
                    </a>
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
                        <a href="pricing.html">Pricing</a>
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
                  <li className="mm-add-listing">
                    <button
                      className="theme-btn btn-style-one"
                      onClick={handleClick}
                    >
                      Job Post
                    </button>
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
            </div>
            <div className="outer-box">
              <a href="/cvs" className="upload-cv">
                Upload your CV
              </a>
              <div className="btn-box">
                <button
                  className="theme-btn btn-style-one"
                  onClick={handleClick}
                >
                  Job Post
                </button>
                {showAlert && (
                  <div className="alert">
                    Bạn không có quyền truy cập trang này.
                  </div>
                )}
              </div>
              <div className="btn-box">
                <a
                  href="/login"
                  className="theme-btn btn-style-three call-modal"
                >
                  {user ? (
                    <div>
                      <button
                        onClick={handleLogout}
                        style={{ textAlign: "center", marginRight: "10px" }}
                      >
                        <p>Welcome, {user.email}</p>
                        Log out
                      </button>
                    </div>
                  ) : (
                    <a
                      href="/login"
                      className="theme-btn btn-style-three call-modal"
                    >
                      Login / Register
                    </a>
                  )}
                </a>
              </div>
            </div>
          </div>
          <div className="mobile-header">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.svg" alt="" title />
              </a>
            </div>
            <div className="nav-outer clearfix">
              <div className="outer-box">
                <div className="login-box">
                  <a href="login-popup.html" className="call-modal">
                    <span className="icon-user" />
                  </a>
                </div>
                <button
                  className="mobile-nav-toggler"
                  onClick={() =>
                    document
                      .getElementById("nav-mobile")
                      .classList.toggle("open")
                  }
                >
                  <span className="flaticon-menu-1" />
                </button>
              </div>
            </div>
          </div>
          <div id="nav-mobile" />
        </header>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Register as Recruiter"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Register as Recruiter</h2>
        <p>
          You do not have permission to access this page. Please register as a
          recruiter to continue.
        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}
