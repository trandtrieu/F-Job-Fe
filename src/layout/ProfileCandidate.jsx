import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../utils/UserContext";
import { validateForm } from "../utils/validate";

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
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [profileExists, setProfileExists] = useState(false);
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const userId = user ? user.id : null;

  useEffect(() => {
    const fetchProfile = async () => {
      if (!userId) return;

      try {
        const response = await axios.get(
          `http://localhost:3005/api/user/candidate/profiles/${userId}`
        );
        const profile = response.data.profile;
        const formattedDateOfBirth = profile.dateOfBirth
          ? new Date(profile.dateOfBirth).toISOString().split("T")[0]
          : "";

        setFormData((prevState) => ({
          ...prevState,
          ...profile,
          dateOfBirth: formattedDateOfBirth,
        }));
        if (profile.image) {
          // Set file preview if image exists
          setFile(profile.image);
          console.log(profile.image);
        }
        setProfileExists(true);
      } catch (error) {
        console.error(`Error fetching profile: ${error.message}`);
        setFormData((prevState) => ({
          ...prevState,
          email: user ? user.email : "",
        }));

        setProfileExists(false);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setFile(fileUrl);
      setFormData((prevState) => ({
        ...prevState,
        image: selectedFile,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append("image", formData.image);
      Object.keys(formData).forEach((key) => {
        if (key !== "image") {
          formDataWithImage.append(key, formData[key]);
        }
      });

      formDataWithImage.append("userId", userId);

      if (profileExists) {
        await axios.post(
          `http://localhost:3005/api/user/candidate/profiles/update/${userId}`,
          formDataWithImage
        );
        toast.success("Profile updated successfully!");
      } else {
        await axios.post(
          `http://localhost:3005/api/user/candidate/create-profile`,
          formDataWithImage
        );
        toast.success("Profile created successfully!");
      }
    } catch (error) {
      toast.error(`Error saving profile: ${error.message}`);
    }
  };

  return (
    <div>
      <div>
        <div className="page-wrapper dashboard">
          <ToastContainer position="bottom-right" />
          {/* <div className="preloader" /> */}
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
                        {/* <h4>My Profile</h4> */}
                      </div>
                      <div className="widget-content">
                        {loading ? (
                          <div>Loading...</div>
                        ) : (
                          <form
                            className="default-form"
                            onSubmit={handleSubmit}
                          >
                            <div className="row">
                              <div className="post-form-group">
                                <input
                                  type="file"
                                  className="post-form-control"
                                  id="image"
                                  accept="image/*"
                                  onChange={handleFileChange}
                                  input
                                />
                                {file && (
                                  <img
                                    src={file}
                                    alt="Profile Preview"
                                    style={{
                                      maxWidth: "150px",
                                      maxHeight: "150px",
                                      marginTop: "10px",
                                      marginBottom: "30px",
                                    }}
                                  />
                                )}
                              </div>

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
