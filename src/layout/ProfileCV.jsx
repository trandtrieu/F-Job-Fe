/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavbarProfile from "./NavbarProfile";
import { UserContext } from "../utils/UserContext";
import { toast } from "react-toastify";

export default function ProfileCV() {
  const [cvs, setCvs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const { user } = useContext(UserContext);

  const userId = user ? user.id : null;
  const token = user ? user.token : null;

  useEffect(() => {
    if (userId && token) {
      const fetchCVs = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3005/api/uploadCv/${userId}/cvs`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCvs(response.data.cvList);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchCVs();
    }
  }, [userId, token]);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("cvFile", file);

    try {
      const response = await axios.post(
        `http://localhost:3005/api/uploadCv/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newCV = {
        cvName: file.name,
        cvPath: URL.createObjectURL(file),
        createDate: new Date().toISOString(),
      };

      setCvs((prevCvs) => [...prevCvs, newCV]);
      setUploadMessage("Upload successful!");
      toast.success("Upload successfully");
    } catch (error) {
      console.error("Error uploading CV:", error);
      setError("Failed to upload CV");
    }
  };

  const handleDelete = async (cvName) => {
    try {
      const response = await axios.delete(
        `http://localhost:3005/api/uploadCv/${userId}/${cvName}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Filter out the deleted CV from the state
      setCvs((prevCvs) => prevCvs.filter((cv) => cv.cvName !== cvName));
    } catch (error) {
      console.error("Error deleting CV:", error);
      setError("Failed to delete CV");
    }
  };

  return (
    <div className="page-wrapper dashboard">
      {/* <div className="preloader" /> */}
      <span className="header-span" />
      <div className="sidebar-backdrop" />
      <NavbarProfile />
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <div className="upper-title-box">
            <h3>My Curriculum Vitae!</h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <div className="chosen-outer">
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.gif"
                      onChange={handleUpload}
                    />
                    {uploadMessage && <p>{uploadMessage}</p>}
                  </div>
                </div>
                <div className="widget-content">
                  {loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>{error}</p>
                  ) : (
                    cvs.map((cv) => (
                      <div key={cv.cvName} className="candidate-block-three">
                        <div className="inner-box">
                          <div className="content">
                            <figure className="image">
                              <img
                                src={`http://localhost:3005/api/uploadCv/download/${cv.cvName}`}
                                alt={cv.cvName}
                                style={{ width: "100px", height: "100px" }} // Adjust the size as needed
                              />
                            </figure>
                            <h4 className="name">
                              <a
                                href={`http://localhost:3005/api/uploadCv/download/${cv.cvName}`}
                                download={cv.cvName}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {cv.cvName}
                              </a>
                            </h4>
                            <ul className="candidate-info">
                              <li>
                                <span className="icon flaticon-calendar" />
                                {new Date(cv.createDate).toLocaleString()}
                              </li>
                            </ul>
                            <ul className="post-tags">
                              <li>
                                <a href="/">App</a>
                              </li>
                            </ul>
                          </div>
                          <div className="option-box">
                            <div className="dropdown resume-action">
                              <button
                                className="dropdown-toggle theme-btn btn-style-three"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Action <i className="fa fa-angle-down" />
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a
                                    data-text="View Application"
                                    href={`http://localhost:3005/api/uploadCv/download/${cv.cvName}`}
                                    target="_blank"
                                  >
                                    <span className="la la-eye" /> View
                                  </a>
                                </li>

                                <li>
                                  <button
                                    data-text="Delete"
                                    onClick={() => handleDelete(cv.cvName)}
                                  >
                                    <span className="la la-times-circle" />{" "}
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
