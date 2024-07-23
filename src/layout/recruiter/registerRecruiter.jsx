import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assest/css/registerRecruiter.css";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { validatePassword, validateForm } from "./../../utils/validate";

import {
  faPhone,
  faLock,
  faEnvelope,
  faUser,
  faBuilding,
  faLocation,
  faPlaceOfWorship,
} from "@fortawesome/free-solid-svg-icons"; // Import icons

const RecruiterRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    city: "",
    district: "",
    gender: "",
    emailRecruiter: "",
    password: "",
    confirmPassword: "",
  });

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Gọi API để lấy danh sách tỉnh/thành phố
    axios
      .get("https://api.example.com/cities")
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the cities!", error);
      });
  }, []);

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFormData({ ...formData, city: selectedCity });

    // Gọi API để lấy danh sách quận/huyện dựa vào thành phố đã chọn
    axios
      .get(`https://api.example.com/cities/${selectedCity}/districts`)
      .then((response) => {
        setDistricts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the districts!", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    const formErrors = validateForm(formData);
    const passwordError = validatePassword(formData.password);

    if (Object.keys(formErrors).length > 0 || passwordError) {
      // Update the errors state
      setErrors({ ...formErrors, password: passwordError });
      toast.error("Please fix the errors in the form.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3005/recruiter/register-recruiter",
        formData
      );

      if (response.status === 200) {
        toast.success("Register with Recruiter successfully");
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      } else {
        toast.error("Error register Recruiter");
      }
    } catch (error) {
      console.error("There was an error!", error);
      toast.error("An error occurred while registering.");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Register for a Recruiter account</h2>

        <p
          style={{
            color: "#000000",
            fontWeight: "300",
            fontSize: "0.9rem",
            paddingBottom: "20px",
          }}
        >
          Create an advantage for your business by experiencing AI & Hiring
          Funnel deep recruitment technology.
        </p>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend
              style={{
                fontFamily: "inherit",
                fontWeight: "400",
                paddingTop: "10px",
                color: "#005599",
              }}
            >
              Regulations
            </legend>

            <p
              style={{
                paddingLeft: "0.7rem",
                color: "#000000",
                fontWeight: "300",
                fontSize: "1rem",
              }}
            >
              To ensure service quality, F-Job{" "}
              <span style={{ color: "red" }}>
                does not allow one user to create many different accounts.
              </span>
            </p>

            <p
              style={{
                paddingLeft: "0.7rem",
                color: "#000000",
                fontWeight: "300",
                fontSize: "1rem",
              }}
            >
              Employer violates, F-Job will stop providing services and all
              Accounts using the F-Job service will have their access completely
              locked Access F-Job's website system. To avoid consequences from
              happening If desired, employers please limit the use of one
              account for businesses to issue business license information.
            </p>

            <p
              style={{
                paddingLeft: "0.7rem",
                color: "#000000",
                fontWeight: "300",
                fontSize: "1rem",
              }}
            >
              For any questions please contact Customer Service Hotline:
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "0.7rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "1rem",
                }}
              >
                <div className="phone-circle">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <span
                  style={{
                    color: "#005599",
                    fontWeight: "500",
                    fontSize: "1rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  +84 869 155 454
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="phone-circle"
                  style={{
                    marginLeft: "2.5rem",
                  }}
                >
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <span
                  style={{
                    color: "#005599",
                    fontWeight: "500",
                    fontSize: "1rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  +84 906 543 903
                </span>
              </div>
            </div>
          </fieldset>

          <div className="form-group-recruiter">
            <label>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "0.5rem", color: "#005599" }}
              />
              Email
            </label>
            <input
              type="email"
              name="emailRecruiter"
              value={formData.emailRecruiter}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group-recruiter">
            <label>
              <FontAwesomeIcon
                icon={faLock}
                style={{ marginRight: "0.5rem", color: "#005599" }}
              />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password (6 to 25 characters)"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="form-group-recruiter">
            <label>
              <FontAwesomeIcon
                icon={faLock}
                style={{ marginRight: "0.5rem", color: "#005599" }}
              />
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Enter the password"
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )}
          </div>
          <h2>Employer Information</h2>
          <div className="form-group-recruiter">
            <label>
              {" "}
              <FontAwesomeIcon
                icon={faUser}
                style={{ marginRight: "0.5rem", color: "#005599" }}
              />{" "}
              First and last name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="First and last name"
            />
            {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          </div>
          <div className="form-group-recruiter gender-group">
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              onChange={handleChange}
              required
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="Nữ"
              onChange={handleChange}
              required
            />{" "}
            Female
          </div>
          <div className="form-group-recruiter">
            <label>
              {" "}
              <FontAwesomeIcon
                icon={faPhone}
                style={{ marginRight: "0.5rem", color: "#005599" }}
              />{" "}
              My Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Personal phone number"
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <div className="form-group-recruiter">
            <label>
              {" "}
              <FontAwesomeIcon
                icon={faBuilding}
                style={{ marginRight: "0.5rem", color: "#005599" }}
              />{" "}
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Company name"
            />
          </div>
          <div className="form-group-recruiter">
            <label>
              {" "}
              <FontAwesomeIcon
                icon={faLocation}
                style={{ marginRight: "0.5rem", color: "#005599" }}
              />{" "}
              Work location
            </label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Enter work location"
            ></input>
          </div>
          <div className="form-group-recruiter">
            <label>
              {" "}
              <FontAwesomeIcon
                icon={faPlaceOfWorship}
                style={{ marginRight: "0.5rem", color: "#005599" }}
              />{" "}
              District
            </label>
            <input
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              placeholder="Enter district"
            ></input>
          </div>

          <div className="form-group-recruiter inline">
            <input type="checkbox" required />I have read and agree to&nbsp;
            <a href="/terms-of-service" className="policy-link">
              F-Job's Terms of Service
            </a>
            &nbsp;and&nbsp;
            <a href="/privacy-policy" className="policy-link">
              Privacy Policy
            </a>
            .
          </div>

          <button type="submit" className="btn-recruiter-page">
            Submit
          </button>
        </form>
        <div className="next-page">
          Already have an account? <a href="/login-recruiter">Sign in now</a>
        </div>
      </div>
      <div className="registration-image">
        <img
          src="https://kstoimenov.com/wp-content/uploads/2017/02/2a.png"
          alt="Registration"
        />
      </div>
    </div>
  );
};

export default RecruiterRegistration;
