import React, { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../utils/UserContext";
import { validatePassword } from "../utils/validate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../assest/css/changePass.css";

const ChangePassword = () => {
  const { user } = useContext(UserContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const token = user ? user.token : null;

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    switch (field) {
      case "oldPassword":
        setShowOldPassword(!showOldPassword);
        break;
      case "newPassword":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirmPassword":
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!user || !user.id) {
      newErrors.general = "User ID not found.";
    }

    const passwordError = validatePassword(newPassword);
    if (passwordError) {
      newErrors.newPassword = passwordError;
    }

    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword =
        "New password and confirm password do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3005/api/user/changePassword/${user.id}`,
        {
          old_password: oldPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        toast.success("Password updated successfully!");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setErrors({});
      } else {
        console.error("Error updating password");
      }
    } catch (error) {
      if (error.response) {
        if (
          error.response.status === 400 &&
          error.response.data.message === "Old Password does not match"
        ) {
          setErrors({ oldPassword: "Old Password does not match" });
        } else if (
          error.response.status === 400 &&
          error.response.data.message === "Sorry! You entered an old password"
        ) {
          setErrors({ newPassword: "Sorry! You entered an old password" });
        } else {
          setErrors({ general: error.response.data.message });
        }
      } else if (error.request) {
        console.error(error.request);
      } else {
        console.error("Error", error.message);
      }
    }
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Change Password</title>
      <link href="css/bootstrap.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <link href="css/responsive.css" rel="stylesheet" />
      <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
      <link rel="icon" href="images/favicon.png" type="image/x-icon" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <div className="page-wrapper dashboard">
        <div className="preloader" />
        <span className="header-span" />
        <div className="user-sidebar">
          <div className="sidebar-inner">
            <ul className="navigation">
              <li>
                <a href="dashboard.html">
                  <i className="la la-home" /> Dashboard
                </a>
              </li>
              <li>
                <a href="dashboard-company-profile.html">
                  <i className="la la-user-tie" />
                  Company Profile
                </a>
              </li>
              <li>
                <a href="dashboard-post-job.html">
                  <i className="la la-paper-plane" />
                  Post a New Job
                </a>
              </li>
              <li>
                <a href="dashboard-manage-job.html">
                  <i className="la la-briefcase" /> Manage Jobs
                </a>
              </li>
              <li>
                <a href="dashboard-applicants.html">
                  <i className="la la-file-invoice" /> All Applicants
                </a>
              </li>
              <li>
                <a href="dashboard-resumes.html">
                  <i className="la la-bookmark-o" /> Shortlisted Resumes
                </a>
              </li>
              <li>
                <a href="dashboard-packages.html">
                  <i className="la la-box" /> Packages
                </a>
              </li>
              <li>
                <a href="dashboard-messages.html">
                  <i className="la la-comment-o" /> Messages
                </a>
              </li>
              <li>
                <a href="dashboard-resume-alerts.html">
                  <i className="la la-bell" /> Resume Alerts
                </a>
              </li>
              <li className="active">
                <a href="/changePassword">
                  <i className="la la-lock" /> Change Password
                </a>
              </li>
              <li>
                <a href="/profileCandidate">
                  <i className="la la-user-alt" /> View Profile
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="la la-sign-out" /> Logout
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="la la-trash" /> Delete Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section className="user-dashboard">
          <div className="user-dashboard-wrap">
            <div className="user-dashboard-wrap-form">
              <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
                Change Password
              </h3>
              <form className="default-form" onSubmit={handleSubmit}>
                <div
                  className="form-group"
                  style={{ position: "relative", width: "100%" }}
                >
                  <label>Current Password</label>
                  <div style={{ position: "relative", width: "100%" }}>
                    <input
                      type={showOldPassword ? "text" : "password"}
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="Current Password"
                      required
                      style={{ width: "100%" }}
                    />
                    <FontAwesomeIcon
                      icon={showOldPassword ? faEye : faEyeSlash}
                      onClick={() => togglePasswordVisibility("oldPassword")}
                      className="toggle-password-icon"
                    />
                  </div>
                  {errors.oldPassword && (
                    <div className="error">{errors.oldPassword}</div>
                  )}
                </div>
                <div
                  className="form-group"
                  style={{ position: "relative", width: "100%" }}
                >
                  <label>New Password</label>
                  <div style={{ position: "relative", width: "100%" }}>
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New Password"
                      required
                      style={{ width: "100%" }}
                    />
                    <FontAwesomeIcon
                      icon={showNewPassword ? faEye : faEyeSlash}
                      onClick={() => togglePasswordVisibility("newPassword")}
                      className="toggle-password-icon"
                    />
                  </div>
                  {errors.newPassword && (
                    <div className="error">{errors.newPassword}</div>
                  )}
                </div>
                <div
                  className="form-group"
                  style={{ position: "relative", width: "100%" }}
                >
                  <label>Confirm Password</label>
                  <div style={{ position: "relative", width: "100%" }}>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                      required
                      style={{ width: "100%" }}
                    />
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEye : faEyeSlash}
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                      className="toggle-password-icon"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <div className="error">{errors.confirmPassword}</div>
                  )}
                </div>
                {/* {errors.general && (
                  <div className="error_general">{errors.general}</div>
                )} */}
                <div className="form-group" style={{ width: "100%" }}>
                  <button
                    className="theme-btn btn-style-one"
                    style={{ width: "100%" }}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ChangePassword;
