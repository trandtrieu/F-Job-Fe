import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="main-footer -type-13 alternate3">
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row">
            <div className="big-column col-xl-4 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="/" style={{ display: "inline-block" }}>
                    <img
                      src="../assets/images/logoFix.png"
                      alt="Fjob logo"
                      title="Fjob"
                      // style="width: 154px; height: 100px; object-fit: contain;"
                      style={{
                        width: "77px",
                        height: "75px",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Call us </span>
                  <a href="thebeehost%40support.html">+84 869 155 454</a>
                </p>
                <p className="address">
                  114 My Thi, Khue My, Ngu Hanh Son
                  <br /> Da Nang, Viet Nam. <br />
                  <a href="mailto:support@superio.com" className="email">
                    fjobcompany@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="big-column col-xl-8 col-lg-9 col-md-12">
              <div className="row">
                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">For Candidates</h4>
                    <div className="widget-content">
                      <ul className="list">
                        <li>
                          <a href="#">Browse Jobs</a>
                        </li>
                        <li>
                          <a href="#">Browse Categories</a>
                        </li>
                        <li>
                          <a href="#">Candidate Dashboard</a>
                        </li>
                        <li>
                          <a href="#">Job Alerts</a>
                        </li>
                        <li>
                          <a href="#">My Bookmarks</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">For Employers</h4>
                    <div className="widget-content">
                      <ul className="list">
                        <li>
                          <a href="#">Browse Candidates</a>
                        </li>
                        <li>
                          <a href="#">Employer Dashboard</a>
                        </li>
                        <li>
                          <a href="#">Add Job</a>
                        </li>
                        <li>
                          <a href="#">Job Packages</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">About Us</h4>
                    <div className="widget-content">
                      <ul className="list">
                        <li>
                          <a href="#">Job Page</a>
                        </li>
                        <li>
                          <a href="#">Job Page Alternative</a>
                        </li>
                        <li>
                          <a href="#">Resume Page</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">Helpful Resources</h4>
                    <div className="widget-content">
                      <ul className="list">
                        <li>
                          <a href="#">Site Map</a>
                        </li>
                        <li>
                          <a href="#">Terms of Use</a>
                        </li>
                        <li>
                          <a href="#">Privacy Center</a>
                        </li>
                        <li>
                          <a href="#">Security Center</a>
                        </li>
                        <li>
                          <a href="#">Accessibility Center</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="outer-box">
            <div className="copyright-text">
              © 2024 <a href="#">FJOB Company</a>. All Right Reserved.
            </div>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      <div
        className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
        onClick={handleScrollToTop}
      >
        <span className="fa fa-angle-up"></span>
      </div>
    </footer>
  );
};

export default Footer;
