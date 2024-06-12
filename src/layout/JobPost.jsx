import React, { useState } from "react";
import "../assest/css/jobpost.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    jobType: "Web Designer",
    jobCategories: "All Jobs",
    salaryType: "Hourly",
    minSalary: "",
    maxSalary: "",
    skills: "",
    qualifications: "",
    experience: "",
    industry: "Aviation",
    address: "",
    country: "",
    state: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "minSalary") {
      setFormData((prevState) => ({
        ...prevState,
        minSalary: Math.max(1000000, value),
      }));
    } else if (id === "maxSalary") {
      setFormData((prevState) => ({
        ...prevState,
        maxSalary: Math.min(1000000000, value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/job-post/create-job-post",
        formData
      );

      if (response.status === 201) {
        toast.success("Job posted successfully");
      } else {
        toast.warning("Failed to post job");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="post-container post-mt-5" style={{ marginTop: "100px" }}>
      <h1>Job Posting Form</h1>
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
          <label htmlFor="jobType">Job Type</label>
          <select
            className="post-form-control"
            id="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option>Web Designer</option>
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
            <option>All Jobs</option>
          </select>
        </div>
        <div className="post-form-group">
          <label htmlFor="salaryType">Salary</label>
          <select
            className="post-form-control"
            id="salaryType"
            value={formData.salaryType}
            onChange={handleChange}
          >
            <option>Hourly</option>
            <option>Monthly</option>
          </select>
        </div>
        <div className="post-form-row">
          <div className="post-form-group post-col-md-6">
            <label htmlFor="minSalary">Min Salary</label>
            <input
              type="number"
              className="post-form-control"
              id="minSalary"
              value={formData.minSalary}
              onChange={handleChange}
              placeholder="Min salary"
            />
          </div>
          <div className="post-form-group post-col-md-6">
            <label htmlFor="maxSalary">Max Salary</label>
            <input
              type="number"
              className="post-form-control"
              id="maxSalary"
              value={formData.maxSalary}
              onChange={handleChange}
              placeholder="Max salary"
            />
          </div>
        </div>
        <div className="post-form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            className="post-form-control"
            id="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Skills"
          />
        </div>
        <div className="post-form-group">
          <label htmlFor="qualifications">Qualifications</label>
          <input
            type="text"
            className="post-form-control"
            id="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
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
          <label htmlFor="industry">Industry</label>
          <select
            className="post-form-control"
            id="industry"
            value={formData.industry}
            onChange={handleChange}
          >
            <option>Aviation</option>
          </select>
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

export default JobPostingForm;
