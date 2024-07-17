/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavbarProfile from "./NavbarProfile";
import { UserContext } from "../utils/UserContext";
import { toast } from "react-toastify";
import "../assest/css/ProfileCV.css";
// import "../assest/css";

export default function ProfileCV() {
  const [cvs, setCvs] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const { user } = useContext(UserContext);

  const userId = user ? user.id : null;
  const token = user ? user.token : null;

  useEffect(() => {
    if (userId && token) {
      const fetchCVsAndDegrees = async () => {
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

          const responseDegrees = await axios.get(
            `http://localhost:3005/api/degrees/${userId}/degrees`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setDegrees(responseDegrees.data.degreeList);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchCVsAndDegrees();
    }
  }, [userId, token]);

  const handleUploadCV = async (event) => {
    const files = event.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("cvFiles", files[i]);
    }

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

      const newCVs = Array.from(files).map((file) => ({
        cvName: file.name,
        cvPath: URL.createObjectURL(file),
        createDate: new Date().toISOString(),
      }));

      setCvs((prevCvs) => [...prevCvs, ...newCVs]);
      setUploadMessage("Upload successful!");
      toast.success("CV upload successful!");
    } catch (error) {
      console.error("Error uploading CV:", error);
      setError("Failed to upload CV");
    }
  };

  const handleUploadDegree = async (event) => {
    const files = event.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("degreeFiles", files[i]);
    }

    try {
      const response = await axios.post(
        `http://localhost:3005/api/degrees/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newDegrees = Array.from(files).map((file) => ({
        degreeName: file.name,
        degreePath: URL.createObjectURL(file),
        uploadDate: new Date().toISOString(),
      }));

      setDegrees((prevDegrees) => [...prevDegrees, ...newDegrees]);
      setUploadMessage("Upload successful!");
      toast.success("Degree upload successful!");
    } catch (error) {
      console.error("Error uploading degree:", error);
      setError("Failed to upload degree");
    }
  };

  const handleDeleteCV = async (cvName) => {
    try {
      const response = await axios.delete(
        `http://localhost:3005/api/uploadCv/${userId}/${cvName}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCvs((prevCvs) => prevCvs.filter((cv) => cv.cvName !== cvName));
      toast.success("CV deleted successfully");
    } catch (error) {
      console.error("Error deleting CV:", error);
      setError("Failed to delete CV");
    }
  };

  const handleDeleteDegree = async (degreeName) => {
    try {
      const response = await axios.delete(
        `http://localhost:3005/api/degrees/${userId}/${degreeName}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDegrees((prevDegrees) =>
        prevDegrees.filter((degree) => degree.degreeName !== degreeName)
      );
      toast.success("Degree deleted successfully");
    } catch (error) {
      console.error("Error deleting degree:", error);
      setError("Failed to delete degree");
    }
  };

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span" />
      <div className="sidebar-backdrop" />
      <NavbarProfile />
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <div className="upper-title-box">
            <h3>My Curriculum Vitae and Degrees!</h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <div className="chosen-outer">
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.gif"
                      onChange={handleUploadCV}
                      multiple
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
                            <figure className="image cv-image-container">
                              <img
                                src={`http://localhost:3005/api/uploadCv/download/${cv.cvName}`}
                                alt={cv.cvName}
                                className="cv-image"
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
                                    onClick={() => handleDeleteCV(cv.cvName)}
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
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <div className="chosen-outer">
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.gif"
                      onChange={handleUploadDegree}
                      multiple
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
                    degrees.map((degree) => (
                      <div
                        key={degree.degreeName}
                        className="candidate-block-three"
                      >
                        <div className="inner-box">
                          <div className="content">
                            <figure className="image cv-image-container">
                              <img
                                src={`http://localhost:3005/api/degrees/download/${degree.degreeName}`}
                                alt={degree.degreeName}
                                className="cv-image"
                              />
                            </figure>
                            <h4 className="name">
                              <a
                                href={`http://localhost:3005/api/degrees/download/${degree.degreeName}`}
                                download={degree.degreeName}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {degree.degreeName}
                              </a>
                            </h4>
                            <ul className="candidate-info">
                              <li>
                                <span className="icon flaticon-calendar" />
                                {new Date(degree.uploadDate).toLocaleString()}
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
                                    href={`http://localhost:3005/api/degrees/download/${degree.degreeName}`}
                                    target="_blank"
                                  >
                                    <span className="la la-eye" /> View
                                  </a>
                                </li>
                                <li>
                                  <button
                                    data-text="Delete"
                                    onClick={() =>
                                      handleDeleteDegree(degree.degreeName)
                                    }
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
