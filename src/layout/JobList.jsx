import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../assest/css/joblist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faDollarSign,
  faLocationDot,
  faPlaceOfWorship,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
import { UserContext } from "../utils/UserContext";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "95vh",
    overflowY: "auto",
    border: "none",
    textAlign: "center",
    zIndex: 1001,
    maxWidth: "45%",
  },
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
        } catch (err) {
          console.error("Error fetching CVs and degrees:", err);
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
    if (selectedJob) {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //trieu- apply job
  const handleApply = async (e) => {
    e.preventDefault();
    if (!selectedJob._id) {
      toast.error("No job selected!");
      return;
    }

    if (!cv || !degree || !name || !email || !phone) {
      toast.error("Please fill all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("cvPath", cv);
    formData.append("degreePath", degree);
    formData.append("fullName", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("introduce", "");

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
      toast.error("There was an error submitting your application.");
    }
  };

  const handleCvChange = (e) => {
    const file = e.target.files[0];
    setCv(file);
    setCvName(file?.name || "");
    // const fileURL = file ? URL.createObjectURL(file) : "";
    const fileURL = `http://localhost:3005/api/uploadCv/download/${file}`;
    setCvFileURL(fileURL);
  };

  const handleDegreeChange = (e) => {
    const file = e.target.files[0];
    setDegree(file);
    setDegreeName(file?.name || "");
    const fileURL = file ? URL.createObjectURL(file) : "";
    setDegreeFileURL(fileURL);
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
                style={{
                  fontWeight: "600",
                }}
              >
                {job.title}
              </p>
              <p
                style={{
                  fontWeight: "600",
                }}
              >
                {" "}
                {job.nameCompany}
              </p>

              <p
                style={{
                  color: "#07bc0c",
                }}
              >
                <FontAwesomeIcon
                  icon={faDollarSign}
                  style={{
                    marginRight: "5px",
                  }}
                />
                {formatSalary(job.minSalary)} - {formatSalary(job.maxSalary)}{" "}
                {job.salaryType}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{
                    marginRight: "5px",
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
                <p>{selectedJob.nameCompany}</p>
                <p
                  style={{
                    color: "#07bc0c",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    style={{
                      marginRight: "5px",
                    }}
                  />
                  {formatSalary(selectedJob.minSalary)} -{" "}
                  {formatSalary(selectedJob.maxSalary)} {selectedJob.salaryType}
                </p>
                <button className="apply-now-btn" onClick={openModal}>
                  Apply Now
                </button>
                <button
                  className="wishlist-btn"
                  style={{
                    marginLeft: "30px",
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="job-address">
                <p>
                  <strong>Job Type:</strong> {selectedJob.jobType}
                </p>
                <p>
                  <strong>Job Categories:</strong> {selectedJob.jobCategories}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faPlaceOfWorship}
                    style={{
                      marginRight: "5px",
                    }}
                  />{" "}
                  {selectedJob.workPlace}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{
                      marginRight: "5px",
                    }}
                  />{" "}
                  {selectedJob.address}
                </p>
              </div>
              <div className="reason">
                <h4>Reasons to join us</h4>
                {Array.isArray(selectedJob.reason) ? (
                  <ul>
                    {selectedJob.reason.map((reason, index) => (
                      <li key={index}>{reason}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No reasons provided</p>
                )}
              </div>
              <div className="job-skill">
                <h4>Your skills and experience</h4>
                <p>{selectedJob.experience} experience</p>
                <p>{selectedJob.skills}</p>
                <p>{selectedJob.qualifications}</p>
              </div>
              <div className="job-description">
                <h4>Job description</h4>
                <p>{selectedJob.description}</p>
              </div>
              {selectedJob.workingDays &&
                selectedJob.workingDays.length > 0 && (
                  <p>
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
        <h4>Apply for {selectedJob ? selectedJob.title : "Job"}</h4>
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
                        accept="image/*, application/pdf"
                        id="uploadCV"
                        onChange={handleCvChange}
                      />
                      <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="uploadCV"
                      >
                        Browse CV
                      </label>
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
                    <Tooltip id="cvTooltip" place="top" effect="solid">
                      <h1>hello</h1>
                      {/* <iframe src={cvFileURL} width="400" height="300"></iframe> */}
                    </Tooltip>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="uploading-outer">
                    <div className="uploadButton">
                      <input
                        className="uploadButton-input"
                        type="file"
                        name="degree"
                        accept="image/*, application/pdf"
                        id="uploadDegree"
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
                    <Tooltip id="degreeTooltip" place="top" effect="solid">
                      <iframe
                        src={degreeFileURL}
                        width="400"
                        height="300"
                      ></iframe>
                    </Tooltip>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cv">Select CV:</label>
                  <select
                    id="cv"
                    value={cvName}
                    onChange={(e) => setCvName(e.target.value)}
                  >
                    <option value="">Select CV</option>
                    {cvs.map((cv) => (
                      <option key={cv.cvName} value={cv.cvName}>
                        {cv.cvName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="degree">Select Degree:</label>
                  <select
                    id="degree"
                    value={degreeName}
                    onChange={(e) => setDegreeName(e.target.value)}
                  >
                    <option value="">Select Degree</option>
                    {degrees.map((degree) => (
                      <option key={degree.degreeName} value={degree.degreeName}>
                        {degree.degreeName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name will be displayed with recruiter"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Email address</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your email will be displayed with recruiter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Phone contact</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your phone will be displayed with recruiter"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group col-lg-6 col-md-12">
                <label>Recommendation</label>
                <input
                  type="text"
                  name="recommendation"
                  placeholder="Your recommendation"
                />
              </div>
              <button type="submit">Submit Application</button>
              <button type="button" onClick={closeModal}>
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default JobList;
