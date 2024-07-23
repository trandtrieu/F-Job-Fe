import React, { useState, useEffect } from "react";
import axios from "axios";
import Report from "./Report";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faFileImport,
  faFileLines,
  faFilePen,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import BudgetReport from "./BudgetReport";

function DashboardRecruiter() {
  const [cvCount, setCvCount] = useState(0);
  const [recruitmentCount, setRecruitmentCount] = useState(0);

  useEffect(() => {
    const fetchCVCount = async () => {
      try {
        const response = await axios.get("http://localhost:3005/cvs");
        setCvCount(response.data.length);
      } catch (error) {
        console.error("Error fetching CVs:", error);
      }
    };

    const fetchRecruitmentCount = async () => {
      try {
        const response = await axios.get("http://localhost:3005/job/");
        setRecruitmentCount(response.data.length);
      } catch (error) {
        console.error("Error fetching recruitments:", error);
      }
    };

    fetchCVCount();
    fetchRecruitmentCount();
  }, []);

  const createJob = async (jobData) => {
    try {
      await axios.post("http://localhost:3005/job/", jobData);
      setRecruitmentCount(recruitmentCount + 1);
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };
  return (
    <>
        
    <section className="dashboard section" style={{ marginTop: "85px" }}>
    <div className="notification">
    <p className="text" style={{color: "red"}}> <FontAwesomeIcon icon={faCircleInfo} style={{color: "#ed2c2c",}} /> Thông báo quan trọng: </p>
          <p className="text">Từ ngày 15/07/2024, hệ thống chính thức tiến hành cập nhật chính sách xác thực tài khoản.</p>

        </div>
      {/* <SidebarAdmin /> */}
      <div className="row">
        <div className="col-lg-7">
          <div className="col-12">
            <div className="card-wrapper mb-6 p-4 border rounded-lg shadow-md bg-white">
              <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Recruitment efficiency
              </h1>
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className="card custom-card bg-primary">
                    <div className="card-body">
                      <h5 className="card-title" style={{}}>
                        Total CVs
                        <FontAwesomeIcon
                          icon={faDatabase}
                          style={{ marginLeft: "170px" }}
                        />
                      </h5>
                      <p className="card-text">{cvCount}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card custom-card bg-danger">
                    <div className="card-body">
                      <h5 className="card-title">
                        New Applications
                        <FontAwesomeIcon
                          icon={faFileImport}
                          style={{ marginLeft: "100px" }}
                        />
                      </h5>
                      <p className="card-text">25</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card custom-card bg-warning">
                    <div className="card-body">
                      <h5 className="card-title">
                        Recruitments
                        <FontAwesomeIcon
                          icon={faFileLines}
                          style={{ marginLeft: "140px" }}
                        />
                      </h5>
                      <p className="card-text">{recruitmentCount}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card custom-card bg-success">
                    <div className="card-body">
                      <h5 className="card-title">
                        CV Reception
                        <FontAwesomeIcon
                          icon={faFilePen}
                          style={{ marginLeft: "130px" }}
                        />
                      </h5>
                      <p className="card-text">8</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12" >
              <Report />
            </div>
          </div>
        </div>
        <div
          className="custom-budget col-lg-4 mb-6 p-4 border rounded-lg shadow-md bg-white"
          style={{ marginBottom: "-50px", height: "447px", width: "527px" }}
        >
          <BudgetReport />
        </div>
      </div>
    </section>
    </>

  );
}

export default DashboardRecruiter;
