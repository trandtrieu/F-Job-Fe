import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assest/css/registerRecruiter.css";
import { toast } from "react-toastify";

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

    const { confirmPassword, ...rest } = formData;

    if (rest.password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3005/recruiter/register-recruiter",
        rest
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

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Regulations</legend>
            <p>
              To ensure service quality,F-Job does not allow one user Create
              many different accounts.
            </p>{" "}
            <p>
              Employer violates, F-Job will stop providing services and all
              Accounts using the F-Job service will have their access completely
              locked Access F-Job's website system. To avoid consequences from
              happening If desired, employers please limit the use of one
              account for businesses to issue business license information.
            </p>
          </fieldset>

          <div className="form-group-recruiter">
            <label>Email</label>
            <input
              type="email"
              name="emailRecruiter"
              value={formData.emailRecruiter}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-recruiter">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-recruiter">
            <label>Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <h2>Employer Information</h2>
          <div className="form-group-recruiter">
            <label>First and last name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
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
            <label>My Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-recruiter">
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-recruiter">
            <label>Work location</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-group-recruiter">
            <label>District</label>
            <input
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="form-group-recruiter inline">
            <input type="checkbox" required />I have read and agree to F-Job's
            Terms of Service and Privacy Policy.
          </div>

          <button type="submit" className="btn-recruiter-page">
            Submit
          </button>
        </form>
        <div className="next-page">
          You have account? <a href="/login-recruiter">Login Recruiter</a>
        </div>
      </div>
    </div>
  );
};

export default RecruiterRegistration;
