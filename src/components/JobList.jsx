import { updateJobStatus, deleteJob } from "../api";

export default function JobList({ jobs, onUpdate, onDelete }) {
  const cardStyle = {
    background: "#f3f4f6",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.3s",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#4b5563",
    marginBottom: "8px",
  };

  const paraStyle = {
    margin: "4px 0",
    color: "#374151",
  };

  const linkStyle = {
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: "500",
  };

  const selectStyle = {
    marginTop: "10px",
    padding: "8px 10px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "1rem",
    backgroundColor: "#ffffff",
    cursor: "pointer",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background-color 0.3s",
  };

  return (
    <div style={listStyle}>
      {jobs.map((job) => (
        <div
          key={job._id}
          style={{
            ...cardStyle,
            ":hover": { transform: "scale(1.02)" },
          }}
        >
          <h3 style={titleStyle}>
            {job.company} – {job.role}
          </h3>
          <p style={paraStyle}>📌 Status: {job.status}</p>
          <p style={paraStyle}>📅 Applied on: {new Date(job.date).toLocaleDateString()}</p>
          {job.link && (
            <a
              href={job.link}
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              🔗 View Job Posting
            </a>
          )}
          <br />
          <select
            value={job.status}
            style={selectStyle}
            onChange={async (e) => {
              const res = await updateJobStatus(job._id, e.target.value);
              onUpdate(res.data);
            }}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          <br />
          <button
            style={buttonStyle}
            onClick={() => {
              deleteJob(job._id);
              onDelete(job._id);
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#dc2626")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ef4444")}
          >
            ❌ Delete
          </button>
        </div>
      ))}
    </div>
  );
}
