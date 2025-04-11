import { useState } from "react";
import { addJob } from "../api";

export default function JobForm({ onAdd }) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addJob(form);
    onAdd(res.data);
    setForm({
      company: "",
      role: "",
      status: "Applied",
      date: "",
      link: "",
    });
  };

  const inputStyle = {
    padding: "10px 12px",
    fontSize: "0.95rem", // slightly smaller
    border: "2px solid #d1d5db",
    borderRadius: "8px",
    transition: "0.3s",
    backgroundColor: "#f9fafb",
    width: "100%",
    boxSizing: "border-box", // ✅ this is key to prevent overflow
  };
  

  const formStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    marginBottom: "30px",
    animation: "fadeIn 0.5s ease-in-out",
  };

  const buttonStyle = {
    gridColumn: "span 2",
    padding: "12px",
    fontSize: "1rem",
    backgroundColor: "#9333ea",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        required
        style={inputStyle}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="link"
        placeholder="Link"
        value={form.link}
        onChange={handleChange}
        style={inputStyle}
      />
      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#7e22ce")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#9333ea")}
      >
        ➕ Add Job
      </button>
    </form>
  );
}
