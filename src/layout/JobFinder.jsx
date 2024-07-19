import React, { useEffect, useState } from "react";
import SideBar from "../sidebar/SideBar";
import axios from "axios";
import { FiMapPin, FiClock, FiDollarSign, FiCalendar } from "react-icons/fi";
import { FaEnvelopeOpenText } from "react-icons/fa6";

const JobFinder = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  const filteredData = () => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.title && job.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (location) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.country &&
          job.country.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredJobs = filteredJobs.filter((job) => {
        const { country, maxSalary, experience, salaryType, jobType } = job;

        return (
          (country &&
            country.toLowerCase() === selectedCategory.toLowerCase()) ||
          (maxSalary && parseInt(maxSalary) === parseInt(selectedCategory)) ||
          (salaryType &&
            salaryType.toLowerCase() === selectedCategory.toLowerCase()) ||
          (experience &&
            experience.toLowerCase() === selectedCategory.toLowerCase()) ||
          (jobType && jobType.toLowerCase() === selectedCategory.toLowerCase())
        );
      });
    }

    return filteredJobs;
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3005/job/", {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        });
        console.log("Response data:", response.data);
        const dataJobs = response.data;
        if (Array.isArray(dataJobs)) {
          setJobs(dataJobs);
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

  const result = filteredData();

  return (
    <div
      className="max-w-screen-2x1 container mx-auto x1:px-24 px-4 py-14"
      style={{ marginTop: "150px" }}
    >
      <h1 className="text-xl font-bold text-primary mb-3">
        <span className="colored"> All the jobs </span> have been prepared for
        you. Apply now!
      </h1>
      <div className="text-lg text-black/70 mb-8">
        Find Jobs, Employment &amp; Career Opportunities
      </div>

      <div className="job-search-form">
        <form method="post">
          <div className="row">
            <div className="form-group col-lg-5 col-md-12 col-sm-12">
              <span className="icon flaticon-search-1" />
              <input
                type="text"
                name="field_name_job"
                id="field_name_job"
                placeholder="Job title, keywords, or company"
                value={query}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
              <span className="icon flaticon-map-locator" />
              <input
                type="text"
                name="field_name"
                placeholder="City or postcode"
                value={location}
                onChange={handleLocationChange}
              />
            </div>
            <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
              <button type="submit" className="theme-btn btn-style-one">
                <span className="btn-title">Find Jobs</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <SideBar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded">
          <section className="card-list">
            {result && result.length > 0 ? (
              result.map((job) => (
                <div
                  key={job.id}
                  className="job-listing mb-6 p-4 border rounded-lg shadow-md bg-white"
                >
                  <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                  <img
                    src={job.companyLogo}
                    alt="Company Logo"
                    className="company-logo mb-2"
                  />
                  <div>
                    <h4 className="text-black mb-1">{job.companyName}</h4>
                    <h3 className="text-lg font-semibold mb-2">
                      {job.jobTitle}
                    </h3>
                    <div className="text-dark/70 text-base flex flex-wrap gap-2 mb-2">
                      <span className="flex items-center gap-2">
                        <FiMapPin /> {job.country}{" "}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiClock /> {job.jobType}{" "}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiDollarSign /> {job.minSalary}--{job.maxSalary}{" "}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiCalendar /> {job.postingDate}{" "}
                      </span>
                    </div>
                    <p className="text-base text-gray-700">
                      {truncateDescription(job.description, 200)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No jobs available</p>
            )}
          </section>
        </div>
        <div className="bg-white p-4 rounded">
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <FaEnvelopeOpenText />
            Contact me for Jobs
          </h3>
          <p className="text-dark/75 text-base mb-4">
            Please contact us if you encounter any issues finding suitable jobs
            or any errors that make your experience using the website
            inconvenient.
          </p>

          <div className="w-full space-y-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@gmail.com"
              className="w-full block py-2 pl-3 border focus:outline-none"
            ></input>

            <input
              type="submit"
              value={"Contact us"}
              className="w-full block py-2 pl-3 border focus:outline-none 
              bg-primary rounded-sm text-white cursor-pointer font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFinder;
