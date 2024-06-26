import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../utils/UserContext";

const ProfileCandidate = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    website: "",
    address: "",
    dateOfBirth: "",
    sex: "",
    jobTitle: "",
    userId: "",
    avatar: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const userId = user ? user.id : null;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3005/api/user/candidate/profiles/${userId}`
        );
        setFormData(response.data.profile);
        setLoading(false);
      } catch (error) {
        toast.error(`Error fetching profile: ${error.message}`);
      }
    };

    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData({
        ...formData,
        avatar: files[0], // Lưu file ảnh vào avatar
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleUpload = async () => {
    const formDataUpload = new FormData();
    formDataUpload.append("avatar", formData.avatar); // Thêm avatar vào formData

    try {
      const response = await axios.post(
        `http://localhost:3005/api/user/candidate/upload-avatar`,
        formDataUpload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Lưu đường dẫn của ảnh vào formData
      setFormData({
        ...formData,
        avatar: response.data.avatarUrl,
      });
      toast.success("Avatar uploaded successfully!");
    } catch (error) {
      toast.error(`Error uploading avatar: ${error.message}`);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const vietnameseNameRegex = /^[\p{L}\s']+$/u; // Biểu thức chính quy cho tên tiếng Việt

    if (!formData.fullName) {
      newErrors.fullName = "Your name is required.";
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Your name must be at least 2 characters.";
    } else if (!vietnameseNameRegex.test(formData.fullName)) {
      newErrors.fullName =
        "Your name must contain only Vietnamese letters and spaces.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number is not valid.";
    }

    if (formData.dateOfBirth) {
      const today = new Date();
      const birthDate = new Date(formData.dateOfBirth);
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        newErrors.dateOfBirth = "You must be at least 18 years old.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      await axios.post(
        `http://localhost:3005/api/user/candidate/create-profile`,
        {
          ...formData,
          userId: userId,
        }
      );
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(`Error updating profile: ${error.message}`);
    }
  };

  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <title>Superio | Candidate Dashboard Profile</title>
        <link href="css/bootstrap.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
        <link
          rel="shortcut icon"
          href="images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="images/favicon.png" type="image/x-icon" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <div className="page-wrapper dashboard">
          <ToastContainer position="bottom-right" />
          <div className="preloader" />
          <span className="header-span" />
          <div className="sidebar-backdrop" />
          <div className="user-sidebar">
            <div className="sidebar-inner">
              <ul className="navigation">
                <li>
                  <a href="candidate-dashboard.html">
                    <i className="la la-home" /> Dashboard
                  </a>
                </li>
                <li className="active">
                  <a href="candidate-dashboard-profile.html">
                    <i className="la la-user-tie" /> My Profile
                  </a>
                </li>
                <li>
                  <a href="candidate-dashboard-resume.html">
                    <i className="la la-file-invoice" /> My Resume
                  </a>
                </li>
                <li>
                  <a href="candidate-dashboard-applied-job.html">
                    <i className="la la-briefcase" /> Applied Jobs
                  </a>
                </li>
                <li>
                  <a href="candidate-dashboard-job-alerts.html">
                    <i className="la la-bell" /> Job Alerts
                  </a>
                </li>
                <li>
                  <a href="candidate-dashboard-shortlisted-resume.html">
                    <i className="la la-bookmark-o" /> Shortlisted Jobs
                  </a>
                </li>
                <li>
                  <a href="candidate-dashboard-cv-manager.html">
                    <i className="la la-file-invoice" /> CV manager
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
                  <a href="dashboard-change-password.html">
                    <i className="la la-lock" /> Change Password
                  </a>
                </li>
                <li>
                  <a href="dashboard-profile.html">
                    <i className="la la-user-alt" /> View Profile
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="la la-sign-out" /> Logout
                  </a>
                </li>
                <li>
                  <a href="dashboard-delete.html">
                    <i className="la la-trash" /> Delete Profile
                  </a>
                </li>
              </ul>
              <div className="skills-percentage">
                <h4>Skills Percentage</h4>
                <p>
                  Put value for "Cover Image" field to increase your skill up to
                  "85%"
                </p>
                <div className="pie-graph">
                  <div className="graph-outer">
                    <input
                      type="text"
                      className="dial"
                      data-fgcolor="#7367F0"
                      data-bgcolor="transparent"
                      data-width={234}
                      data-height={234}
                      data-linecap="normal"
                      defaultValue={30}
                    />
                    <div className="inner-text count-box">
                      <span
                        className="count-text txt"
                        data-stop={30}
                        data-speed={2000}
                      />
                      %
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="user-dashboard">
            <div className="dashboard-outer">
              <div className="upper-title-box">
                <h3>My Profile</h3>
                <div className="text">Ready to jump back in?</div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="ls-widget">
                    <div className="tabs-box">
                      <div className="widget-title">
                        <h4>My Profile</h4>
                      </div>
                      <div className="widget-content">
                        <div className="uploading-outer">
                          <div className="uploadButton">
                            <input
                              className="uploadButton-input"
                              type="file"
                              name="attachments[]"
                              accept="image/*, application/pdf"
                              id="upload"
                              multiple
                            />
                            <label
                              className="uploadButton-button ripple-effect"
                              htmlFor="upload"
                            >
                              Browse Logo
                            </label>
                            <span className="uploadButton-file-name" />
                          </div>
                          <div className="text">
                            Max file size is 1MB, Minimum dimension: 330x300 And
                            Suitable files are .jpg &amp; .png
                          </div>
                        </div>
                        {loading ? (
                          <div>Loading...</div>
                        ) : (
                          <form
                            className="default-form"
                            onSubmit={handleSubmit}
                          >
                            <div className="row">
                              <div className="form-group col-lg-6 col-md-12">
                                <label>Full Name</label>
                                <input
                                  type="text"
                                  name="fullName"
                                  placeholder="Jerome"
                                  id="fullName"
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  required
                                />
                                {errors.fullName && (
                                  <div className="error">{errors.fullName}</div>
                                )}
                              </div>
                              <div className="form-group col-lg-6 col-md-12">
                                <label>Job Title</label>
                                <input
                                  type="text"
                                  name="jobTitle"
                                  id="jobTitle"
                                  placeholder="UI Designer"
                                  value={formData.jobTitle}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group col-lg-6 col-md-12">
                                <label>Phone</label>
                                <input
                                  type="text"
                                  name="phone"
                                  placeholder="0 123 456 7890"
                                  id="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  required
                                />
                                {errors.phone && (
                                  <div className="error">{errors.phone}</div>
                                )}
                              </div>
                              <div className="form-group col-lg-6 col-md-12">
                                <label>Email address</label>
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="creativelayers"
                                  id="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                />
                                {errors.email && (
                                  <div className="error">{errors.email}</div>
                                )}
                              </div>
                              <div className="form-group col-lg-6 col-md-12">
                                <label>Website</label>
                                <input
                                  type="url"
                                  name="website"
                                  placeholder="www.jerome.com"
                                  id="website"
                                  value={formData.website}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group col-lg-6 col-md-12">
                                <label>Address</label>
                                <input
                                  type="text"
                                  name="address"
                                  placeholder="5-10 Years"
                                  id="address"
                                  value={formData.address}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group col-lg-6 col-md-12">
                                <label>Date of Birth</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="dateOfBirth"
                                  name="dateOfBirth"
                                  value={formData.dateOfBirth}
                                  onChange={handleChange}
                                />
                                {errors.dateOfBirth && (
                                  <div className="error">
                                    {errors.dateOfBirth}
                                  </div>
                                )}
                              </div>
                              <div className="form-group col-lg-6 col-md-12">
                                <label>Sex</label>
                                <select
                                  id="sex"
                                  className="form-control"
                                  value={formData.sex}
                                  onChange={handleChange}
                                  name="sex"
                                >
                                  <option value="" disabled>
                                    Select Sex
                                  </option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                              <div className="form-group col-lg-6 col-md-12">
                                <button className="theme-btn btn-style-one">
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileCandidate;
