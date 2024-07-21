import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assest/css/joblist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faDollarSign,
  faLocationDot,
  faPlaceOfWorship,
} from "@fortawesome/free-solid-svg-icons";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

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
        console.log("Response data:", response.data);
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

    fetchJobs();
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
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
              <p style={{ fontWeight: "600" }}>{job.title}</p>
              <p style={{ fontWeight: "600" }}> {job.nameCompany}</p>

              <p style={{ color: "#07bc0c" }}>
                <FontAwesomeIcon
                  icon={faDollarSign}
                  style={{ marginRight: "5px" }}
                />
                {formatSalary(job.minSalary)} - {formatSalary(job.maxSalary)}{" "}
                {job.salaryType}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ marginRight: "5px" }}
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
            {" "}
            <div className="scrollable-right">
              <div className="job-details-header">
                <h2>{selectedJob.title}</h2>
                <p>{selectedJob.nameCompany}</p>
                <p style={{ color: "#07bc0c" }}>
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    style={{ marginRight: "5px" }}
                  />
                  {formatSalary(selectedJob.minSalary)} -{" "}
                  {formatSalary(selectedJob.maxSalary)} {selectedJob.salaryType}
                </p>
                <button className="apply-now-btn">Apply Now</button>
                <button
                  className="wishlist-btn"
                  // onClick={() => addToWishlist(selectedJob)}
                  style={{ marginLeft: "30px" }}
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
                    style={{ marginRight: "5px" }}
                  />{" "}
                  {selectedJob.workPlace}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ marginRight: "5px" }}
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
    </div>
  );
};

export default JobList;
