import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function CreateCV() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    skills: "",
  });

  const [pdfLink, setPdfLink] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3005/api/cv/create", {
        ...form,
        education: form.education.split(","),
        experience: form.experience.split(","),
        skills: form.skills.split(","),
      });
      setPdfLink(response.data.file);
      toast.success("CV created successfully");
    } catch (error) {
      toast.error("Failed to create CV");
      console.error("Failed to create CV:", error);
    }
  };

  return (
    <div className="page-wrapper" style={{ marginTop: "50px" }}>
      <h1>Create CV</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <label htmlFor="education">Education</label>
        <input
          name="education"
          placeholder="Education (comma separated)"
          value={form.education}
          onChange={handleChange}
        />
        <label htmlFor="experience">Experience</label>
        <input
          name="experience"
          placeholder="Experience (comma separated)"
          value={form.experience}
          onChange={handleChange}
        />
        <label htmlFor="skills">Skills</label>
        <input
          name="skills"
          placeholder="Skills (comma separated)"
          value={form.skills}
          onChange={handleChange}
        />
        <button type="submit">Create CV</button>
      </form>
      {pdfLink && (
        <div>
          <h2>Your CV PDF</h2>
          <a
            href={`http://localhost:3005${pdfLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  );
}

export default CreateCV;
