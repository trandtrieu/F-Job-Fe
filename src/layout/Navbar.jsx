import React, { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import "../assest/css/navbar.css";

Modal.setAppElement("#root");

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleJobPostClick = (e) => {
    if (!user || user.role !== "recruiter") {
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
                  <li className="mm-add-listing">
                    <a
                      className="theme-btn btn-style-one"
                      href="/job-post"
                      onClick={handleJobPostClick}
                    >
                      Job Post
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="outer-box">
              <a
                href="/cvs"
                className="upload-cv"
                style={{ marginRight: "20px" }}
              >
                Upload your CV
              </a>
              <div className="btn-box">
                <a
                  className="theme-btn btn-style-one"
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
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Register as Recruiter"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h2>Chào bạn,</h2>
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
        <button onClick={() => setIsModalOpen(false)}>Đóng</button>
      </Modal>
    </>
  );
}