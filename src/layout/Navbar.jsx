import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../utils/UserContext";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import "../assest/css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [recruiterEmail, setRecruiterEmail] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const userJSON = localStorage.getItem("user");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      if (user && user.role) {
        setUserRole(user.role);
        setUser(user);
      }
    }

    const recruiterJSON = localStorage.getItem("recruiter");
    if (recruiterJSON) {
      const recruiter = JSON.parse(recruiterJSON);
      if (recruiter && recruiter.role) {
        setUserRole(recruiter.role);
        setUser(recruiter);
        setRecruiterEmail(recruiter.emailRecruiter);
        console.log(recruiterEmail);
      }
    }
  }, [setUser]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("recruiter");
    window.location.href = "/";
  };

  const handleJobPostClick = (e) => {
    if (!user || userRole !== "recruiter") {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleRegisterClick = () => {
    setIsModalOpen(false);
    window.location.href = "/register-recruiter";
  };

  const handleJobSeekerRegisterClick = () => {
    setIsModalOpen(false);
    window.location.href = "/register";
  };

  const navJobFinder = () =>{
    window.location.href="/job-finder";
  };
  const navStatistic =() =>{
    window.location.href="/view-statistic";

  };

  return (
    <>
      <div className="body-wrapper">
        <header className="main-header">
          <div className="main-box">
            <div className="nav-outer">
              <div className="logo-box">
                <div className="logo">
                  <a href="/" style={{ display: "inline-block" }}>
                    <img
                      src="../assets/images/letterFlogo.png"
                      alt="Fjob logo"
                      title="Fjob"
                      // style="width: 154px; height: 100px; object-fit: contain;"
                      style={{
                        width: "154px",
                        height: "75px",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </div>
              </div>
              <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                  <li className="mm-add-listing">
                    <a
                      className="theme-btn-role btn-style-one-role"
                      href="/"
                      style={{ fontSize: "16px", marginRight: "20px" }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="mm-add-listing">
                    <a
                      className="theme-btn-role btn-style-one-role"
                      href="/job-finder"
                      style={{ fontSize: "16px", marginRight: "20px" }}
                    >
                      Find Job
                    </a>
                  </li>
                  <li className="mm-add-listing">
                    <a
                      className="theme-btn-role btn-style-one-role"
                      href="#news-section"
                      style={{ fontSize: "16px", marginRight: "20px" }}
                    >
                      Blog
                    </a>
                  </li>
                  {user ? (
                    <>
                      {userRole === "admin" && (
                        <li className="mm-add-listing">
                          <a
className="theme-btn-role btn-style-one-role"
                            href="/manager"
                            style={{ fontSize: "16px", marginRight: "20px" }}
                          >
                            Manager
                          </a>
                        </li>
                      )}
                      {userRole === "recruiter" && (
                        <>
                          <li className="mm-add-listing">
                            <a
                              className="theme-btn-role btn-style-one-role"
                              href="/dashboard-recruiter"
                              style={{ fontSize: "16px", marginRight: "20px" }}
                            >
                              Recruiter
                            </a>
                          </li>

                          <li className="mm-add-listing">
                            <a
                              className="theme-btn-role btn-style-one-role"
                              href="/view-statistic"
                            >
                              View Statistic
                            </a>
                          </li>

                          <li className="mm-add-listing">
                            <a
                              className="theme-btn-role btn-style-one-role"
                              href="/job-list"
                              style={{ fontSize: "16px", marginRight: "20px" }}
                            >
                              Candidates
                            </a>
                          </li>
                        </>
                      )}
                      {userRole === "user" && (
                        <>
                          <li className="mm-add-listing">
                            <a
                              className="theme-btn-role btn-style-one-role"
                              href="/job-list"
                              style={{ fontSize: "16px", marginRight: "20px" }}
                            >
                              Job List
                            </a>
                          </li>
                          <li className="mm-add-listing">
                            <a
                              className="theme-btn-role btn-style-one-role"
                              href="/profileCandidate"
                              style={{
                                fontSize: "16px",
                                marginRight: "20px",
                              }}
                            >
                              Profile Candidates
                            </a>
                          </li>
                        </>
                      )}
                    </>
                  ) : (
                    <li className="mm-add-listing"></li>
                  )}
                </ul>
              </nav>
            </div>

            <div className="outer-box">
              {user && (
                <a href="/cvs" className="upload-cv">
                  CV Template
                </a>
              )}
              <li className="dropdown has-mega-menu">

            <span onClick={navJobFinder}>Find Jobs</span>
          </li>

          
              <div className="btn-box">
                <a
                  className="theme-btn-role btn-style-one"
                  href="/job-post"
                  onClick={handleJobPostClick}
                >
                  Job Post
                </a>
              </div>

              <div className="btn-box">
                {user ? (
                  <div>
                    <button
                      onClick={handleLogout}
                      style={{
                        textAlign: "center",
                        marginRight: "10px",
                        paddingLeft: "30px",
                      }}
                    >
                      {userRole === "recruiter" ? (
                        <p>Welcome, {recruiterEmail}</p>
                      ) : (
                        <p>Welcome, {user.email}</p>
                      )}
                      Log out
                    </button>
                  </div>
                ) : (
                  <a
                    href="/login"
                    className="theme-btn-role btn-style-three call-modal"
                  >
Login / Register
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="mobile-header">
            <div className="logo">
              <a href="/">
                <img src="images/logo.svg" alt="" title />
              </a>
            </div>
            <div className="nav-outer clearfix">
              <div className="outer-box">
                <div className="login-box">
                  <a href="/login-popup" className="call-modal">
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
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Register as Recruiter"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h2
          style={{
            paddingTop: "30px",
            fontFamily: "inherit",
            fontWeight: "400",
          }}
        >
          Hello,
        </h2>
        <button onClick={() => setIsModalOpen(false)} className="btn-navbar">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p>Please take a few seconds to confirm the information below!</p>
        <p
          style={{
            fontWeight: "400",
            fontSize: "1.1rem",
            marginBottom: "20px",
            color: "#1F1F1F",
          }}
        >
          To best optimize your experience with FJOB, please choose the group
          that best suits you.
        </p>
        <img
          src="https://tuyendung.topcv.vn/app/_nuxt/img/bussiness.efbec2d.png"
          style={{ width: "358px" }}
        ></img>
        <img
          src="https://tuyendung.topcv.vn/app/_nuxt/img/student.c1c39ee.png"
          style={{ width: "358px" }}
        ></img>
        <div className="modal-buttons">
          <button className="btn-recruiter" onClick={handleRegisterClick}>
            I am a recruiter!
          </button>
          <button
            className="btn-job-seeker"
            onClick={handleJobSeekerRegisterClick}
          >
            I am a candidate!
          </button>
        </div>
        <div className="next-page">
          You have account? <a href="/login-recruiter">Login Recruiter</a>
        </div>
      </Modal>
    </>
  );
}