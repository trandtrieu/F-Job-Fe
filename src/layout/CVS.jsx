import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import CVPreview from "./CVPreview";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxHeight: "98vh",
    maxHeight: "80vh",
    overflowY: "auto",
    border: "none",
    textAlign: "center",
    color: "white",
    zIndex: 1001,
  },
};

export default function CVS() {
  const [cvs, setCvs] = useState([]);
  const [cvsType, setCvsType] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedCV, setSelectedCV] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const modalHidden = localStorage.getItem("hideModal");
    if (modalHidden) {
      setModalIsOpen(false);
    } else {
      setModalIsOpen(true);
    }
  }, []);

  useEffect(() => {
    const fetchCVS = async () => {
      try {
        const response = await axios.get("http://localhost:3005/api/cv/cvs");
        setCvs(response.data);
      } catch (error) {
        console.error("Error fetching CV data:", error);
      }
    };

    const fetchCVType = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3005/api/cv/cvtypes"
        );
        setCvsType(response.data);
      } catch (error) {
        console.error("Error fetching CV Type data:", error);
      }
    };

    fetchCVS();
    fetchCVType();
  }, []);

  const handleTypeChange = (typeId) => {
    setSelectedType(typeId);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleDontShowAgain = () => {
    setModalIsOpen(false);
    localStorage.setItem("hideModal", "true");
  };

  const handlePreviewClick = (cv) => {
    setSelectedCV(cv);
    setShowPreviewModal(true);
  };

  const handlePreviewModalClose = () => {
    setShowPreviewModal(false);
  };

  const filteredCVs = cvs
    .filter((cv) => !selectedType || cv.cvType === selectedType)
    .filter((cv) => cv.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="page-wrapper">
      <span className="header-span"></span>
      <section className="page-title">
        <div className="auto-container">
          <div className="title-outer">
            <h1>CV template</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>CVS</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-grid">
                <div className="row">
                  {filteredCVs.length > 0 ? (
                    filteredCVs.map((cv) => (
                      <div
                        className="news-block col-lg-4 col-md-4 col-sm-12"
                        key={cv._id}
                      >
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img
                                src={
                                  cv.image
                                    ? `${cv.image}`
                                    : "../assets/images/resource/news-2.jpg"
                                }
                                alt={cv.name}
                                style={{ maxWidth: "100%", height: "auto" }}
                              />
                            </figure>
                          </div>
                          <div className="lower-content">
                            <h3>
                              <a
                                href={cv.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {cv.name}
                              </a>
                            </h3>
                            <a
                              href={cv.link}
                              target="_blank"
                              className="read-more"
                              rel="noreferrer"
                            >
                              Go <i className="fa fa-angle-right" />
                            </a>
                            <a
                              onClick={() => handlePreviewClick(cv.image)}
                              className="read-more"
                            >
                              Preview <i className="fa fa-angle-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <p>No CVs available for the selected category.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar blog-sidebar">
                <div className="sidebar-widget search-widget">
                  <div className="sidebar-title">
                    <h4>Search by Keywords</h4>
                  </div>
                  <div className="search-box">
                    <form>
                      <div className="form-group">
                        <span className="icon flaticon-search-1" />
                        <input
                          type="search"
                          name="search-field"
                          placeholder="keywords"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="sidebar-widget catagory-widget">
                  <div className="sidebar-title">
                    <h4>Categories</h4>
                  </div>
                  <ul className="catagory-list">
                    <li>
                      <button onClick={() => handleTypeChange(null)}>
                        All
                      </button>
                    </li>
                    {cvsType.map((type) => (
                      <li key={type._id}>
                        <button onClick={() => handleTypeChange(type._id)}>
                          {type.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        contentLabel="Notification Modal"
        style={customStyles}
      >
        <h3>Notification!</h3>
        <div>
          <p style={{ color: "white" }}>
            1. When you select 'Use this template', you will be redirected to
            VietCV for editing
          </p>
          <p style={{ color: "white" }}>
            2. Thank you for visiting this page. Here you can find various CV
            templates.
          </p>
          <p style={{ color: "white" }}>
            3. Thank you for visiting this page. Here you can find various CV
            templates.
          </p>
        </div>
        <div className="button-group">
          <button onClick={handleModalClose}>Close</button>
          <button onClick={handleDontShowAgain}>Don't show again</button>
        </div>
      </Modal>
      <Modal
        isOpen={showPreviewModal}
        onRequestClose={handlePreviewModalClose}
        contentLabel="CV Preview"
        style={customStyles}
      >
        <CVPreview image={selectedCV} />
        <button onClick={handlePreviewModalClose}>Close Preview</button>
      </Modal>
    </div>
  );
}
