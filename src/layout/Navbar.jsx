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
                  {user ? (
                    <>
                      {userRole === "admin" && (
                        <li className="mm-add-listing">
                          <a
                            className="theme-btn-role btn-style-one-role"
                            href="/manager"
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
                            >
                              Recruiter
                            </a>
                          </li>
                          <li className="mm-add-listing">
                            <a
                              className="theme-btn-role btn-style-one-role"
                              href="/job-list"
                            >
                              Jobs
                            </a>
                          </li>
                        </>
                      )}
                      {userRole === "user" && (
                        <li className="mm-add-listing">
                          <a
                            className="theme-btn-role btn-style-one-role"
                            href="/job-list"
                          >
                            Jobs
                          </a>
                        </li>
                      )}
                    </>
                  ) : (
                    <li className="mm-add-listing"></li>
                  )}
                </ul>
              </nav>
            </div>

            <div className="outer-box">
              <a href="/cvs" className="upload-cv">
                Upload your CV
              </a>
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
                      className="theme-btn-role btn-style-one-role"
                      style={{ marginLeft: "16px" }}
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
        <h2>Chào bạn,</h2>
        <button onClick={() => setIsModalOpen(false)} className="btn-navbar">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p>Bạn hãy dành ra vài giây để xác nhận thông tin dưới đây nhé!</p>
        <p>
          Để tối ưu tốt nhất cho trải nghiệm của bạn với F-Job , vui lòng lựa
          chọn nhóm phù hợp nhất với bạn.
        </p>
        <div className="modal-buttons">
          <button className="btn-recruiter" onClick={handleRegisterClick}>
            Tôi là nhà tuyển dụng
          </button>
          <button
            className="btn-job-seeker"
            onClick={handleJobSeekerRegisterClick}
          >
            Tôi là ứng viên tìm việc
          </button>
        </div>
        <div className="next-page">
          You have account? <a href="/login-recruiter">Login Recruiter</a>
        </div>
      </Modal>
    </>
  );
}
