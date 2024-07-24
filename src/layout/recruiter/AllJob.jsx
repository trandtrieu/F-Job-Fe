import React, { useContext, useEffect, useState } from "react";
import NavbarRecruiter from "./NavbarRecruiter";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export default function AllJob() {
  const [jobs, setJobs] = useState([]);
  const history = useHistory();
  const { recruiter } = useContext(UserContext);
  const [selectedJobId, setSelectedJobId] = useState(null);

  const userId = recruiter ? recruiter.id : null;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3005/job/recruiter/${userId}`
        );
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [userId]);
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
  const handleViewCandidates = (jobId) => {
    console.log("jobId: " + jobId);
    history.push(`/all-job-recruiter/${jobId}`); // Navigate to AllJobRecruiter with jobId
  };
  const handleUpdateClick = (jobId) => {
    setSelectedJobId(jobId);
    history.push(`/update-job/${jobId}`);
  };
  const handleViewClick = (jobId) => {
    history.push(`/job-details/${jobId}`);
  };

  return (
    <>
      <div className="page-wrapper dashboard">
        <div className="sidebar-backdrop"></div>

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
                      <div className="chosen-outer">
                        <select className="chosen-select">
                          <option>Last 6 Months</option>
                          <option>Last 12 Months</option>
                          <option>Last 16 Months</option>
                          <option>Last 24 Months</option>
                          <option>Last 5 years</option>
                        </select>
                      </div>
                    </div>
                    <div className="widget-content">
                      <div className="table-outer">
                        <table className="default-table manage-job-table">
                          <thead>
                            <tr>
                              <th>Title</th>
                              <th>Applications</th>
                              <th>Created & Expired</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {jobs.map((job) => (
                              <tr key={job._id}>
                                <td>
                                  <h6>{job.title}</h6>
                                  <span className="info">
                                    <i className="icon flaticon-map-locator" />{" "}
                                    {job.address}, {job.country}
                                  </span>
                                </td>
                                <td className="applied">
                                  <a href="/">
                                    {job.applications.length} Applied
                                  </a>
                                </td>
                                <td>
                                  {new Date(job.createdAt).toLocaleDateString()}{" "}
                                  <br />
                                  {new Date(
                                    job.expiredDate
                                  ).toLocaleDateString()}
                                </td>
                                <td className="status">{job.status}</td>
                                <td>
                                  <div className="option-box">
                                    <ul className="option-list">
                                      <li>
                                        <button
                                          data-text="View Application"
                                          onClick={() =>
                                            handleViewClick(job._id)
                                          }
                                        >
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
                                          onClick={() =>
                                            handleRemoveJob(job._id)
                                          }
                                        >
                                          <span className="la la-trash"></span>
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          data-text="View Candidates"
                                          onClick={() =>
                                            handleViewCandidates(job._id)
                                          }
                                        >
                                          <span className="la la-users" />
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
      </div>
    </>
  );
}
