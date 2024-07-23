import React, { useEffect, useState } from "react";
import NavbarRecruiter from "./NavbarRecruiter";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AllJob() {
  const [jobs, setJobs] = useState([]);
  const history = useHistory();

  const userId = "6697d6da2e4b022845e4d5a7"; // Replace with actual user ID

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

  const handleViewCandidates = (jobId) => {
    console.log("jobId: " + jobId);
    history.push(`/all-job-recruiter/${jobId}`); // Navigate to AllJobRecruiter with jobId
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
                                        <button data-text="View Application">
                                          <span className="la la-eye" />
                                        </button>
                                      </li>
                                      <li>
                                        <button data-text="Edit Job">
                                          <span className="la la-pencil" />
                                        </button>
                                      </li>
                                      <li>
                                        <button data-text="Delete Job">
                                          <span className="la la-trash" />
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
