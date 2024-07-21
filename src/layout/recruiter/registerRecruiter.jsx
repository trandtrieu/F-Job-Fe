import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assest/css/registerRecruiter.css";

const RecruiterRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    city: "",
    district: "",
    gender: "",
    email: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng ký nhà tuyển dụng ở đây
    console.log(formData);
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
              name="email"
              value={formData.email}
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
            <select
              name="city"
              value={formData.city}
              onChange={handleCityChange}
              required
            >
              <option value="">Select province/city</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group-recruiter">
            <label>District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            >
              <option value="">Select district</option>
              {districts.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group-recruiter inline">
            <input type="checkbox" required />I have read and agree to F-Job's
            Terms of Service and Privacy Policy.
          </div>

          <button type="submit" className="btn-recruiter-page">
            Hoàn tất
          </button>
        </form>
        <div className="next-page">
          You have account? <a href="/login-recruiter">Login Recruiter</a>
        </div>
      </div>

      <div className="registration-image">
        <img src="/path/to/your/image.png" alt="Registration" />
      </div>
    </div>
  );
};

export default RecruiterRegistration;
