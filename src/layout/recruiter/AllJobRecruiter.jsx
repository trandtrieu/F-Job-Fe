import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import NavbarRecruiter from "./NavbarRecruiter";
import { toast } from "react-toastify";
import CustomModal from "../../Modal/CustomModal";

export default function AllJobRecruiter() {
  const history = useHistory();
  const { jobId } = useParams(); // Get jobId from URL params

  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cvUrl, setCvUrl] = useState(""); // State to store the CV URL to be viewed
  const [degreeUrl, setDegreeUrl] = useState(""); // State to store the Degree URL to be viewed
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalTitle, setModalTitle] = useState(""); // State to store modal title
  const [statusFilter, setStatusFilter] = useState("All Status"); // State to control filter

  useEffect(() => {
    if (!jobId) {
      console.error("jobId is undefined or null");
      return;
    }

    const fetchCandidates = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3005/job/${jobId}/applicants?status=${
            statusFilter === "All Status" ? "" : statusFilter
          }`
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
  }, [jobId, statusFilter]);

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

  const handleView = (url, title) => {
    setCvUrl(url);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCvUrl(""); // Clear the URL
    setDegreeUrl(""); // Clear the URL
  };

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleRejectClick = async (email) => {
    try {
      await axios.post("http://localhost:3005/job/send-reject-email", {
        email,
      });
      await axios.post("http://localhost:3005/job/update-applicant-status", {
        email,
        status: "REJECTED",
      });
      toast.success("Successfully rejected applicant");
      history.push("/all-job");
    } catch (error) {
      toast.error("Failed to reject applicant");
    }
  };

  // Calculate counts for each status
  const statusCounts = {
    PENDING: candidates.filter((c) => c.status === "PENDING").length,
    APPROVED: candidates.filter((c) => c.status === "APPROVED").length,
    REJECTED: candidates.filter((c) => c.status === "REJECTED").length,
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
                      <select
                        className="chosen-select"
                        onChange={handleStatusChange}
                        value={statusFilter}
                      >
                        <option>All Status</option>
                        <option>PENDING</option>
                        <option>APPROVED</option>
                        <option>REJECTED</option>
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
                          <li className="tab-btn pending" data-tab="#pending">
                            Pending: {statusCounts.PENDING}
                          </li>
                          <li className="tab-btn approved" data-tab="#approved">
                            Approved: {statusCounts.APPROVED}
                          </li>
                          <li className="tab-btn rejected" data-tab="#rejected">
                            Rejected(s): {statusCounts.REJECTED}
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
                                        }
                                        alt={applicant.fullName}
                                      />
                                    </figure>
                                    <h4 className="name">
                                      <a href="/">{applicant.fullName}</a>
                                    </h4>
                                    <ul className="candidate-info">
                                      <li>
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
                                        <a href="#">{applicant.status}</a>
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
                                        <button
                                          data-text="Approve Application"
                                          onClick={() => {
                                            history.push({
                                              pathname: "/approve-schedule",
                                              state: {
                                                email: applicant.email,
                                                status: applicant.status,
                                              },
                                            });
                                          }}
                                        >
                                          <span className="la la-check" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          data-text="Reject Application"
                                          onClick={() =>
                                            handleRejectClick(applicant.email)
                                          }
                                        >
                                          <span className="la la-times-circle" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          data-text="Delete Application"
                                          // Add onClick handler here for deletion logic
                                        >
                                          <span className="la la-trash" />
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          data-text="View CV"
                                          onClick={() =>
                                            handleView(applicant.cvPath, "CV")
                                          }
                                        >
                                          <span>CV</span>
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          data-text="View Degree"
                                          onClick={() =>
                                            handleView(
                                              applicant.degreePath,
                                              "Degree"
                                            )
                                          }
                                        >
                                          <span>Degree</span>
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
      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title={modalTitle}
        contentUrl={cvUrl || degreeUrl}
      />
    </div>
  );
}
