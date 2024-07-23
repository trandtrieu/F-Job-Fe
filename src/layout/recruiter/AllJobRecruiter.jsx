import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarRecruiter from "./NavbarRecruiter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function AllJobRecruiter() {
  const { jobId } = useParams(); // Get jobId from URL params

  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!jobId) {
      console.error("jobId is undefined or null");
      return;
    }

    const fetchCandidates = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3005/job/${jobId}/applicants`
        );
        setCandidates(response.data.applicants || []); // Access the applicants array
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, [jobId]);
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="page-wrapper dashboard">
      <NavbarRecruiter />
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <div className="upper-title-box">
            <h3>All Applicants</h3>
            <div className="text">Ready to jump back in?</div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Applicant</h4>
                    <div className="chosen-outer">
                      <select className="chosen-select">
                        <option>Select Jobs</option>
                        <option>Last 12 Months</option>
                        <option>Last 16 Months</option>
                        <option>Last 24 Months</option>
                        <option>Last 5 year</option>
                      </select>
                      <select className="chosen-select">
                        <option>All Status</option>
                        <option>Last 12 Months</option>
                        <option>Last 16 Months</option>
                        <option>Last 24 Months</option>
                        <option>Last 5 year</option>
                      </select>
                    </div>
                  </div>
                  <div className="widget-content">
                    <div className="tabs-box">
                      <div className="aplicants-upper-bar">
                        <h6>Senior Product Designer</h6>
                        <ul className="aplicantion-status tab-buttons clearfix">
                          <li
                            className="tab-btn active-btn totals"
                            data-tab="#totals"
                          >
                            Total(s): {candidates.length}
                          </li>
                          <li className="tab-btn approved" data-tab="#approved">
                            Approved: 0
                          </li>
                          <li className="tab-btn rejected" data-tab="#rejected">
                            Rejected(s): 0
                          </li>
                        </ul>
                      </div>
                      <div className="tabs-content">
                        <div className="tab active-tab" id="totals">
                          <div className="row">
                            {candidates.map((applicant, index) => (
                              <div
                                className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                                key={index}
                              >
                                <div className="inner-box">
                                  <div className="content">
                                    <figure className="image">
                                      <img
                                        src={
                                          applicant.image ||
                                          "images/resource/default-candidate.png"
                                        } // Use applicant image or default image
                                        alt={applicant.fullName}
                                      />
                                    </figure>
                                    <h4 className="name">
                                      <a href="/">{applicant.fullName}</a>
                                    </h4>
                                    <ul className="candidate-info">
                                      <li className="">
                                        <span className="icon flaticon-mail" />{" "}
                                        {applicant.email}
                                      </li>
                                      <li>
                                        <span className="icon flaticon-phone" />{" "}
                                        {applicant.phone}
                                      </li>
                                    </ul>
                                    <ul className="candidate-info">
                                      <li className="designation text-success">
                                        Applied at:{" "}
                                        {formatDate(applicant.appliedAt)}
                                      </li>
                                    </ul>
                                    <ul className="post-tags">
                                      <li>
                                        <a href="#">App</a>
                                      </li>
                                      <li>
                                        <a href="#">Design</a>
                                      </li>
                                      <li>
                                        <a href="#">Digital</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="option-box">
                                    <ul className="option-list">
                                      <li>
                                        <button data-text="View Application">
                                          <span className="la la-eye" />
                                        </button>
                                      </li>
                                      <li>
                                        <button data-text="Approve Application">
                                          <span className="la la-check" />
                                        </button>
                                      </li>
                                      <li>
                                        <button data-text="Reject Application">
                                          <span className="la la-times-circle" />
                                        </button>
                                      </li>
                                      <li>
                                        <button data-text="Delete Application">
                                          <span className="la la-trash" />
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
