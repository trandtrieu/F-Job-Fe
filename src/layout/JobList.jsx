import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assest/css/joblist.css";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/job/", {
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
  console.log("Jobs state before rendering:", jobs);

  return (
    <div className="job-list job-listings" style={{ marginTop: "100px" }}>
      {jobs && jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id} className="job-listing">
            <h2>{job.title}</h2>
            <p>
              <strong>Description:</strong> {job.description}
            </p>
            <p>
              <strong>Job Type:</strong> {job.jobType}
            </p>
            <p>
              <strong>Job Categories:</strong> {job.jobCategories}
            </p>
            <p>
              <strong>Salary Type:</strong> {job.salaryType}
            </p>
            <p>
              <strong>Min Salary:</strong> {job.minSalary}
            </p>
            <p>
              <strong>Max Salary:</strong> {job.maxSalary}
            </p>
            <p>
              <strong>Skills:</strong> {job.skills}
            </p>
            <p>
              <strong>Qualifications:</strong> {job.qualifications}
            </p>
            <p>
              <strong>Experience:</strong> {job.experience}
            </p>
            <p>
              <strong>Industry:</strong> {job.industry}
            </p>
            <p>
              <strong>Address:</strong> {job.address}
            </p>
            <p>
              <strong>Country:</strong> {job.country}
            </p>
            <p>
              <strong>State:</strong> {job.state}
            </p>
          </div>
        ))
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
};

export default JobList;
