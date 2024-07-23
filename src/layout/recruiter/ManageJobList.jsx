import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../assest/css/managerjoblist.css";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import UpdateJobPost from "./updateJobPost";
import { useHistory } from "react-router-dom";
import NavbarRecruiter from "./NavbarRecruiter";

const ManageJobList = () => {
  const [jobs, setJobs] = useState([]);
  const [dateString, setDateString] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchJobs = async (userId) => {
      try {
        const response = await axios.get("http://localhost:3005/job", {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        });
        const dataJobs = response.data;
        if (Array.isArray(dataJobs)) {
          const updateJob = dataJobs.map((job) => {
            const expiredDate = new Date(job.expiredDate);
            const currentDate = new Date();

            if (currentDate > expiredDate) {
              return { ...job, status: "INACTIVE" };
            }
            return job;
          });
          setJobs(updateJob);
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

  const handleUpdateClick = (jobId) => {
    setSelectedJobId(jobId);
    history.push(`/update-job/${jobId}`);
  };

  const handleRemoveJob = async (jobId) => {
    try {
      const response = await axios.delete(`http://localhost:3005/job/${jobId}`);
      if (response.status === 200) {
        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
        toast.success("Remove job post succesffuly");
      }
    } catch (error) {
      console.error("Error removing job post: ", error);
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toISOString().split("T")[0];
      } else {
        console.error("Invalid date", dateString);
        return "Invalid date";
      }
    } catch (error) {
      console.error("Error formatting date: ", error);
      return "Invalid date";
    }
  };

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      <NavbarRecruiter />
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <div className="upper-title-box">
            <h3>Manage Jobs</h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>My Job Listings</h4>
                  </div>
                  <div className="widget-content">
                    <div className="table-outer">
                      <table className="default-table manage-job-table">
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Created</th>
                            <th>Expired</th>
                            <th>Status</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobs.map((job) => (
                            <tr key={job.id}>
                              <td>
                                <h6>{job.title}</h6>
                                <span className="info">
                                  <i className="icon flaticon-map-locator"></i>{" "}
                                  {job.address}
                                </span>
                              </td>
                              <td>{formatDate(job.createdAt)}</td>
                              <td>{formatDate(job.expiredDate)}</td>
                              <td
                                className={`status ${job.status === "INACTIVE" ? "inactive" : ""
                                  }`}
                              >
                                {job.status}
                              </td>
                              <td style={{ textAlign: "center" }}>
                                <div
                                  className="option-box"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <ul className="option-list">
                                    <li>
                                      <button data-text="View Application">
                                        <span className="la la-eye"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        data-text="Update Application"
                                        onClick={() =>
                                          handleUpdateClick(job._id)
                                        }
                                      >
                                        <FontAwesomeIcon icon={faWrench} />
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        data-text="Delete Application"
                                        onClick={() => handleRemoveJob(job._id)}
                                      >
                                        <span className="la la-trash"></span>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="icon fa fa-angle-up"></span>
      </div>
    </div>
  );
};

export default ManageJobList;
