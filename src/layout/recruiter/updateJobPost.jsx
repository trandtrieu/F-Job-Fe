import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../../assest/css/updateJobPost.css";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateJobPost = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "minSalary" || name === "maxSalary") {
      const cleanedValue = String(value).replace(/,/g, "");
      const formattedValue = formatNumberWithCommas(cleanedValue);
      setFormData((prevState) => ({
        ...prevState,
        [name]: cleanedValue,
      }));
      e.target.value = formattedValue;
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateJobPost = async () => {
      try {
        const response = await axios.put(
          `http://localhost:3005/job/${jobId}`,
          formData
        );
        if (response.status === 200) {
          toast.success("Update Job Post Successfully");
        } else {
          toast.error("Error Updating Job Post!");
        }
      } catch (error) {
        console.error(error);
      }
    };

    updateJobPost();
  };

  const handleCancel = () => {
    history.push("/manage-job-list");
  };

  return (
    <div className="update-job-template">
      <h2>Update Job Template</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-update">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Company Name</label>
          <input
            type="text"
            name="nameCompany"
            value={formData.nameCompany}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Job Type</label>
          <input
            type="text"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Job Categories</label>
          <input
            type="text"
            name="jobCategories"
            value={formData.jobCategories}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group-update">
          <label>Salary Type</label>
          <input
            type="text"
            name="salaryType"
            value={formData.salaryType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Min Salary</label>
          <input
            type="text"
            name="minSalary"
            value={formatNumberWithCommas(String(formData.minSalary))}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Max Salary</label>
          <input
            type="text"
            name="maxSalary"
            value={formatNumberWithCommas(String(formData.maxSalary))}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Qualifications</label>
          <input
            type="text"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update">
          <label>Work Place</label>
          <input
            type="text"
            name="workPlace"
            value={formData.workPlace}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-update form-actions">
          <button type="submit" className="btn-manage-job btn-job-primary">
            Update
          </button>
          <button
            type="button"
            className="btn-manage-job btn-job-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateJobPost;
