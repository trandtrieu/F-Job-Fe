import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../assest/css/joblist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faDollarSign,
  faLocationDot,
  faPlaceOfWorship,
  faMoneyBillWave,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
import { UserContext } from "../utils/UserContext";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90vh",
    overflowY: "auto",
    border: "none",
    textAlign: "center",
    zIndex: 1001,
    maxWidth: "50%",
    padding: "20px",
    borderRadius: "8px",
  },
  buttonSubmit: {
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "#007bff" /* Primary color */,
    color: "#fff",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  buttonSubmitHover: {
    backgroundColor: "#0056b3" /* Darker shade on hover */,
  },
  buttonClose: {
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "#6c757d" /* Secondary color */,
    color: "#fff",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  buttonCloseHover: {
    backgroundColor: "#5a6268" /* Darker shade on hover */,
  },
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);

  const [cv, setCv] = useState(null);
  const [degree, setDegree] = useState(null);
  const [cvs, setCvs] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [cvName, setCvName] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const { user } = useContext(UserContext);
  const userId = user ? user.id : null;
  const token = user ? user.token : null;
  const [cvFileURL, setCvFileURL] = useState("");
  const [degreeFileURL, setDegreeFileURL] = useState("");
  const [profileComplete, setProfileComplete] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phone: "",
    introduce: "",
    image: "",
  });

  const formatSalary = (salary) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(salary);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3005/job/", {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        });
        const dataJobs = response.data;
        if (Array.isArray(dataJobs)) {
          setJobs(dataJobs);
          setSelectedJob(dataJobs[0]);
        } else {
          console.error("Invalid data format:", dataJobs);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        if (error.response) {
          console.error("Error Response Data:", error.response.data);
          console.error("Error Response Status:", error.response.status);
          console.error("Error Response Headers:", error.response.headers);
        }
      }
    };

    const fetchCVsAndDegrees = async () => {
      if (userId && token) {
        try {
          const responseCvs = await axios.get(
            `http://localhost:3005/api/uploadCv/${userId}/cvs`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCvs(responseCvs.data.cvList);
          console.log("List CVs: ", responseCvs.data.cvList);

          const responseDegrees = await axios.get(
            `http://localhost:3005/api/degrees/${userId}/degrees`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setDegrees(responseDegrees.data.degreeList);
          console.log("List Degrees: ", responseDegrees.data.degreeList);

          // Fetch candidate profile information
          const responseProfile = await axios.get(
            `http://localhost:3005/api/user/candidate/profiles/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const profile = responseProfile.data.profile;

          setProfileData({
            fullName: responseProfile.data.profile.fullName,
            email: responseProfile.data.profile.email,
            phone: responseProfile.data.profile.phone,
            image: responseProfile.data.profile.image,
            introduce: "",
          });
          setProfileComplete(
            !!profile.fullName && !!profile.email && !!profile.phone
          );

          console.log(responseProfile.data);
        } catch (err) {
          console.error("Error fetching CVs, degrees, or profile:", err);
        }
      }
    };

    fetchJobs();
    fetchCVsAndDegrees();
  }, [token, userId]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };
  const openModal = () => {
    if (!userId) {
      toast.error("You must login to use this feature!!!");
      return;
    }
    if (selectedJob) {
      if (profileComplete) {
        setModalIsOpen(true);
      } else {
        setProfileModalIsOpen(true);
      }
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closeProfileModal = () => {
    setProfileModalIsOpen(false);
  };

  const handleApply = async (e) => {
    e.preventDefault();
    if (!userId) {
      toast.error("Login first");
      return;
    }
    if (!selectedJob._id) {
      toast.error("No job selected!");
      return;
    }

    if (!cv || degree.length === 0) {
      toast.error("Please select CV and Degree.");
      return;
    }

    const formData = new FormData();
    formData.append("cvPath", cv);
    degree.forEach((file, index) => {
      formData.append(`degreePath`, file);
    });
    formData.append("fullName", profileData.fullName);
    console.log("new name: " + profileData.fullName);
    formData.append("email", profileData.email);
    formData.append("phone", profileData.phone);
    formData.append("introduce", profileData.introduce || "");

    try {
      const response = await axios.post(
        `http://localhost:3005/job/apply/${selectedJob._id}/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Application submitted successfully!");
      closeModal();
    } catch (error) {
      console.error("There was an error!", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("There was an error submitting your application.");
      }
    }
  };

  useEffect(() => {
    console.log("Profile Data has changed:", profileData);
  }, [profileData]);

  const handleCvChange = (e) => {
    const file = e.target.files[0];
    setCv(file);
    setCvName(file?.name || "");
    const fileURL = `http://localhost:3005/api/uploadCv/download/${file.name}`;
    setCvFileURL(fileURL);
  };

  const handleDegreeChange = (e) => {
    const files = Array.from(e.target.files);
    setDegree(files);
    setDegreeName(files.map((file) => file.name).join(", "));
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setDegreeFileURL(fileURLs);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]: value,
    }));
  };

  return (
    <div className="job-list-container">
      <div className="scrollable">
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="job-listing"
              onClick={() => handleJobClick(job)}
            >
              <p
                className="highlight-text"
                style={{
                  fontSize: "1rem",
                  fontFamily: "Inter",
                  fontWeight: "600",
                }}
              >
                {job.title}
              </p>
              <p
                style={{
                  fontSize: "0.86rem",
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                {" "}
                {job.nameCompany}
              </p>

              <p
                style={{
                  color: "#E05C3A",
                  fontWeight: "500",
                }}
              >
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  style={{
                    color: "#0767B8",
                    marginRight: "5px",
                  }}
                />
                {formatSalary(job.minSalary)} - {formatSalary(job.maxSalary)}{" "}
                VND <br />
                {job.salaryType}
              </p>
              <p
                style={{
                  marginRight: "5px",
                  fontFamily: "Inter",
                  fontWeight: "600",
                }}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{
                    color: "#0767B8",
                    paddingRight: "10px",
                  }}
                />
                {job.address}
              </p>
            </div>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
      {selectedJob && (
        <div className="job-details">
          <div className="scrollable-container">
            <div className="scrollable-right">
              <div className="job-details-header">
                <h2>{selectedJob.title}</h2>
                <p style={{ fontSize: "1.2rem", fontWeight: "300" }}>
                  {selectedJob.nameCompany}
                </p>
                <p
                  style={{
                    color: "#07bc0c",
                    fontWeight: "500",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMoneyBillWave}
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  {formatSalary(selectedJob.minSalary)} -{" "}
                  {formatSalary(selectedJob.maxSalary)} VND <br />
                  {selectedJob.salaryType}{" "}
                </p>
                <button className="apply-now-btn" onClick={openModal}>
                  Apply Now
                </button>
                <button
                  className="wishlist-btn"
                  // onClick={() => addToWishlist(selectedJob)}
                  style={{ marginLeft: "30px" }}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="job-address">
                <p style={{ fontSize: "0.9rem", fontFamily: "Inter" }}>
                  <strong>Job Type:</strong> {selectedJob.jobType}
                </p>
                <p style={{ fontSize: "0.9rem", fontFamily: "Inter" }}>
                  <strong>Job Categories:</strong> {selectedJob.jobCategories}
                </p>
                <p style={{ fontSize: "0.9rem", fontFamily: "Inter" }}>
                  <FontAwesomeIcon
                    icon={faPlaceOfWorship}
                    style={{
                      marginRight: "5px",
                      color: "#008000",
                    }}
                  />{" "}
                  {selectedJob.workPlace}
                </p>
                <p style={{ fontSize: "0.9rem", fontFamily: "Inter" }}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{
                      marginRight: "5px",
                      color: "#008000",
                    }}
                  />{" "}
                  {selectedJob.address}
                </p>
              </div>
              <div className="reason">
                <h4>Reasons to join us</h4>
                {Array.isArray(selectedJob.reason) ? (
                  <ul style={{ fontSize: "0.9rem", fontFamily: "Inter" }}>
                    {selectedJob.reason.map((reason, index) => (
                      <li key={index}>{reason} </li>
                    ))}
                  </ul>
                ) : (
                  <p>No reasons provided</p>
                )}
              </div>
              <div className="job-skill">
                <h4>Your skills and experience</h4>
                <p style={{ fontSize: "0.9rem", fontFamily: "Inter" }}>
                  {selectedJob.experience} experience
                </p>
                <p style={{ fontSize: "0.9rem", fontFamily: "Inter" }}>
                  {selectedJob.skills}
                </p>
                <p style={{ fontSize: "0.9rem", fontFamily: "Inter" }}>
                  {selectedJob.qualifications}
                </p>
              </div>

              <div className="job-description">
                <h4>Job description</h4>
                <p style={{ fontSize: "0.9rem", fontFamily: "Inter" }}>
                  {selectedJob.description}
                </p>
              </div>
              {selectedJob.workingDays &&
                selectedJob.workingDays.length > 0 && (
                  <p className="working-days">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      style={{ color: "#008000", paddingRight: "10px" }}
                    />
                    <strong>Working Days:</strong>{" "}
                    {selectedJob.workingDays.join(", ")}
                  </p>
                )}
            </div>
          </div>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Apply for Job"
        style={customStyles}
      >
        <h4 class="custom-heading">
          Apply for {selectedJob ? selectedJob.title : "Job"}
        </h4>

        <hr />
        <div className="widget-content">
          <form onSubmit={handleApply} className="default-form">
            <div className="row" style={{ textAlign: "left" }}>
              <div className="form-group row">
                <div className="col-md-12">
                  <div className="uploading-outer">
                    <div className="uploadButton">
                      <input
                        className="uploadButton-input"
                        type="file"
                        name="cv"
                        accept="image/*"
                        id="uploadCV"
                        onChange={handleCvChange}
                      />
                      <label className="uploadButton-button" htmlFor="uploadCV">
                        Browse CV
                      </label>
                      <span className="uploadButton-text">
                        Support .doc, .docx, pdf formats with size under 5MB
                      </span>
                      <input
                        type="file"
                        id="uploadCV"
                        style={{ display: "none" }}
                      />

                      <span className="uploadButton-file-name">
                        {cvName && (
                          <p
                            className="text-success"
                            data-tip
                            data-for="cvTooltip"
                          >
                            Uploaded CV: {cvName}
                          </p>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="uploading-outer">
                    <div className="uploadButton">
                      <input
                        className="uploadButton-input"
                        type="file"
                        name="degree"
                        accept="image/*"
                        id="uploadDegree"
                        multiple
                        onChange={handleDegreeChange}
                      />

                      <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="uploadDegree"
                      >
                        Browse Degree
                      </label>
                      <span className="uploadButton-file-name">
                        {degreeName && (
                          <p
                            className="text-success"
                            data-tip
                            data-for="degreeTooltip"
                          >
                            Uploaded Degree: {degreeName}
                          </p>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Email address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Phone contact</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Recommendation</label>
                <input
                  type="text"
                  name="introduce"
                  value={profileData.introduce}
                  onChange={handleInputChange}
                  placeholder="Introduce yourself briefly"
                />
              </div>
              <div className="button-container">
                <button
                  type="submit"
                  style={customStyles.buttonSubmit}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      customStyles.buttonSubmitHover.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      customStyles.buttonSubmit.backgroundColor)
                  }
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  style={customStyles.buttonClose}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      customStyles.buttonCloseHover.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      customStyles.buttonClose.backgroundColor)
                  }
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        isOpen={profileModalIsOpen}
        onRequestClose={closeProfileModal}
        style={customStyles}
      >
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            marginBottom: "20px",
            fontSize: "26px",
            textAlign: "center",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Profile Required
        </h2>
        <p
          style={{
            marginBottom: "25px",
            fontSize: "18px",
            textAlign: "center",
            color: "#555",
            lineHeight: "1.5",
          }}
        >
          You must create a profile before applying for a job.
        </p>
        <a
          href="/profileCandidate"
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "16px",
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Go to create profile
        </a>
        <button
          onClick={closeProfileModal}
          style={{
            display: "block",
            margin: "0 auto",
            padding: "12px 24px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: isHovered ? "#0056b3" : "#007bff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default JobList;
