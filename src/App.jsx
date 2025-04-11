import { useEffect, useState } from "react";
import { getJobs } from "./api";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./App.css"; // Make sure this is imported

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(res => setJobs(res.data));
  }, []);

  const handleAdd = (job) => setJobs([job, ...jobs]);
  const handleUpdate = (updated) => setJobs(jobs.map(j => j._id === updated._id ? updated : j));
  const handleDelete = (id) => setJobs(jobs.filter(j => j._id !== id));

  return (
    <div className="app-background">
      <div className="main-card">
        <h1 className="title">🎓 Student Job Tracker</h1>
        <JobForm onAdd={handleAdd} />
        <JobList jobs={jobs} onUpdate={handleUpdate} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
