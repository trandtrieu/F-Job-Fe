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
import EventActivity from "./EventActivity";

function DashboardRecruiter() {
  const [cvCount, setCvCount] = useState(0);
  const [recruitmentCount, setRecruitmentCount] = useState(0);
  const [newCvCount, setNewCvCount] = useState(0);
  const [recruiterId, setRecruiterId] = useState(1); // Assuming a static ID, replace with dynamic ID

  useEffect(() => {
    const fetchJobsAndCVs = async () => {
      try {
        // Fetch jobs for the recruiter
        const jobsResponse = await axios.get(
          `http://localhost:3005/job?recruiterId=${recruiterId}`
        );
        const jobs = jobsResponse.data;

        // Fetch all CVs
        const cvResponses = await Promise.all(
          jobs.map((job) =>
            axios.get(`http://localhost:3005/cvs?jobId=${job.id}`)
          )
        );

        // Flatten the array of CVs
        const allCVs = cvResponses.flatMap((response) => response.data);

        // Calculate total CVs
        const totalCVs = allCVs.length;

        // Assuming CVs have a 'createdAt' field or similar to determine newness
        const now = new Date();
        const oneDayAgo = new Date(now - 24 * 60 * 60 * 1000); // Adjust to your needs

        const newCVs = allCVs.filter(
          (cv) => new Date(cv.createdAt) > oneDayAgo
        );

        setCvCount(totalCVs);
        setRecruitmentCount(jobs.length);
        setNewCvCount(newCVs.length); // Number of new CVs
      } catch (error) {
        console.error("Error fetching jobs or CVs:", error);
      }
    };

    fetchJobsAndCVs();
  }, [recruiterId]);

  //Print ra giá trị của các biến
  // console.log(cvCount);
  // console.log(newCvCount);
  // console.log(recruitmentCount);

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
          <p className="text1">
            {" "}
            <FontAwesomeIcon icon={faCircleInfo} />
            Important notification:{" "}
          </p>
          <p className="text2">
            From July 15, 2024, the system will officially undergo a major
            update account authentication book.
          </p>
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
                        <p className="card-text">{newCvCount}</p>
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
                        <p className="card-text">{cvCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <Report />
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column">
            <div
              className=" mb-6 p-4 border rounded-lg shadow-md bg-white"
              style={{ marginTop: "10px", width: "502px", height: "300px" }}
            >
              <EventActivity />
            </div>
            <div
              className="custom-budget  mb-6 p-4 border rounded-lg shadow-md bg-white"
              style={{
                marginBottom: "-20px",
                height: "447px",
                width: "527px",
                marginTop: "40px",
              }}
            >
              <BudgetReport />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardRecruiter;
