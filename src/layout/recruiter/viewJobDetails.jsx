import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../../assest/css/updateJobPost.css";
import axios from "axios";
import { toast } from "react-toastify";

const JobDetails = () => {
  const history = useHistory();
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    nameCompany: "",
    jobType: "",
    jobCategories: "",
    description: "",
    salaryType: "",
    minSalary: "",
    maxSalary: "",
    skills: "",
    qualifications: "",
    experience: "",
    address: "",
    country: "",
    state: "",
    workPlace: "",
  });

  const formatNumberWithCommas = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    console.log(jobId);

    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/job/${jobId}`);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleCancel = () => {
    history.push("/manage-job-list");
  };

  return (
    <div className="update-job-template">
      <h2>Job Details</h2>
      <form>
        <div className="form-group-update">
          <label>Title</label>
          <input type="text" name="title" value={formData.title} required />
        </div>
        <div className="form-group-update">
          <label>Company Name</label>
          <input
            type="text"
            name="nameCompany"
            value={formData.nameCompany}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Job Type</label>
          <input type="text" name="jobType" value={formData.jobType} required />
        </div>
        <div className="form-group-update">
          <label>Job Categories</label>
          <input
            type="text"
            name="jobCategories"
            value={formData.jobCategories}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            required
          ></textarea>
        </div>
        <div className="form-group-update">
          <label>Salary Type</label>
          <input
            type="text"
            name="salaryType"
            value={formData.salaryType}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Min Salary</label>
          <input
            type="text"
            name="minSalary"
            value={formatNumberWithCommas(String(formData.minSalary))}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Max Salary</label>
          <input
            type="text"
            name="maxSalary"
            value={formatNumberWithCommas(String(formData.maxSalary))}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Skills</label>
          <input type="text" name="skills" value={formData.skills} required />
        </div>
        <div className="form-group-update">
          <label>Qualifications</label>
          <input
            type="text"
            name="qualifications"
            value={formData.qualifications}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} required />
        </div>
        <div className="form-group-update">
          <label>Country</label>
          <input type="text" name="country" value={formData.country} required />
        </div>
        <div className="form-group-update">
          <label>State</label>
          <input type="text" name="state" value={formData.state} required />
        </div>
        <div className="form-group-update">
          <label>Work Place</label>
          <input
            type="text"
            name="workPlace"
            value={formData.workPlace}
            required
          />
        </div>
        <div className="form-group-update form-actions">
          <button
            type="button"
            className="btn btn-secondary-details"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobDetails;
