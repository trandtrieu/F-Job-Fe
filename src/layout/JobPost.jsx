import React, { useState } from "react";
import "../assest/css/jobpost.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobPost = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toISOString();
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    jobType: "",
    jobCategories: "",
    minSalary: "",
    maxSalary: "",
    skills: [],
    qualifications: [],
    experience: "",
    address: "",
    country: "",
    state: "",
    salaryType: "",
    workingDays: [],
    nameCompany: "",
    workPlace: "",
    reason: [],
    createdAt: getCurrentDate(),
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleReasonChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      reason: value.split(";").map((reason) => reason.trim()),
    }));
  };

  const handleSkillsChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      skills: value.split(";").map((skills) => skills.trim()),
    }));
  };

  const handleQualificationsChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      qualifications: value
        .split(";")
        .map((qualifications) => qualifications.trim()),
    }));
  };

  const handleWorkingDaysChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      if (checked) {
        return {
          ...prevState,
          workingDays: [...prevState.workingDays, value],
        };
      } else {
        return {
          ...prevState,
          workingDays: prevState.workingDays.filter((day) => day !== value),
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transformedData = {
      ...formData,
      skills: formData.skills.join(", "),
      qualifications: formData.qualifications.join(", "),
    };

    try {
      const response = await axios.post(
        "http://localhost:3005/job/create-job-post",
        transformedData
      );

      if (response.status === 201) {
        toast.success("Job posted successfully");
        window.location.href = "/";
      } else {
        toast.warning("Failed to post job");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="post-container post-mt-5" style={{ marginTop: "100px" }}>
      <h1 className="title-posting">Job Posting Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="post-form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="post-form-control"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter job title"
          />
        </div>
        <div className="post-form-group">
          <label htmlFor="title">Name Company</label>
          <input
            type="text"
            className="post-form-control"
            id="nameCompany"
            value={formData.nameCompany}
            onChange={handleChange}
            placeholder="Enter name company"
          />
        </div>
        <div className="post-form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="post-form-control"
            id="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the job"
          ></textarea>
        </div>
        <div className="post-form-group">
          <label htmlFor="salaryType">Salary</label>
          <select
            className="post-form-control"
            id="salaryType"
            value={formData.salaryType}
            onChange={handleChange}
          >
            <option value="Hourly">Hourly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div className="post-form-group">
          <label htmlFor="salaryType">Workplace</label>
          <select
            className="post-form-control"
            id="workPlace"
            value={formData.workPlace}
            onChange={handleChange}
          >
            <option value="">Choose your workplace</option>
            <option value="office">In the office</option>
            <option value="remote">Remote</option>
          </select>
        </div>
        <div className="post-form-group">
          <label htmlFor="jobType">Job Type</label>
          <select
            className="post-form-control"
            id="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">Choose Job Type</option>
            <option value="Full-Time">Full-Time Job</option>
            <option value="Part-Time">Part-Time Job</option>
            <option value="Temporary">Temporary Job</option>
            <option value="Contract">Contract Job</option>
            <option value="Freelance">Freelance Job</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote Job</option>
            <option value="Seasonal">Seasonal Job</option>
          </select>
        </div>
        <div className="post-form-group">
          <label htmlFor="jobCategories">Job Categories</label>
          <select
            className="post-form-control"
            id="jobCategories"
            value={formData.jobCategories}
            onChange={handleChange}
          >
            <option value="Administrative">Administrative</option>
            <option value="IT/Technology">IT/Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Construction">Construction</option>
            <option value="Finance">Finance</option>
            <option value="Marketing/Sales">Marketing/Sales</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Engineering">Engineering</option>
            <option value="Creative Arts/Design">Creative Arts/Design</option>
          </select>
        </div>
        <div className="post-form-row">
          <div className="post-form-group post-col-md-6">
            <label htmlFor="minSalary">Min Salary</label>
            <input
              type="text"
              className="post-form-control"
              id="minSalary"
              value={formData.minSalary}
              onChange={handleChange}
              placeholder="Min salary"
              pattern="\d*"
              title="Please enter a valid number"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
          </div>
          <div className="post-form-group post-col-md-6">
            <label htmlFor="maxSalary">Max Salary</label>
            <input
              type="text"
              className="post-form-control"
              id="maxSalary"
              value={formData.maxSalary}
              onChange={handleChange}
              placeholder="Max salary"
              pattern="\d*"
              title="Please enter a valid number"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
          </div>
        </div>
        <div className="post-form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            className="post-form-control"
            id="skills"
            value={formData.skills.join("; ")}
            onChange={handleSkillsChange}
            placeholder="Skills"
          />
        </div>
        <div className="post-form-group">
          <label htmlFor="qualifications">Qualifications</label>
          <input
            type="text"
            className="post-form-control"
            id="qualifications"
            value={formData.qualifications.join(";")}
            onChange={handleQualificationsChange}
            placeholder="Qualifications"
          />
        </div>
        <div className="post-form-group">
          <label htmlFor="experience">Experience</label>
          <input
            type="text"
            className="post-form-control"
            id="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Experience"
          />
        </div>
        <div className="post-form-group">
          <label htmlFor="reason">Reason</label>
          <input
            type="text"
            className="post-form-control"
            id="reason"
            value={formData.reason.join("; ")}
            onChange={handleReasonChange}
            placeholder="Reasons to choose the company"
          />
        </div>
        <div className="post-form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="post-form-control"
            id="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </div>
        <div className="post-form-row">
          <div className="post-form-group post-col-md-6">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className="post-form-control"
              id="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
            />
          </div>
          <div className="post-form-group post-col-md-6">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="post-form-control"
              id="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
            />
          </div>
        </div>
        <div className="post-form-group">
          <label htmlFor="workingDays">Working Days</label>
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <div key={day} className="post-form-check">
                <input
                  type="checkbox"
                  id={day}
                  value={day}
                  onChange={handleWorkingDaysChange}
                  checked={formData.workingDays.includes(day)}
                />
                <label htmlFor={day}>{day}</label>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="post-btn post-btn-primary post-btn-block"
        >
          Post Now
        </button>
      </form>
    </div>
  );
};

export default JobPost;
