import axios from "axios";

const API = axios.create({ baseURL: "https://cuvettebackend-production.up.railway.app" });

export const getJobs = () => API.get("/jobs");
export const addJob = (data) => API.post("/jobs", data);
export const updateJobStatus = (id, status) => API.patch(`/jobs/${id}`, { status });
export const deleteJob = (id) => API.delete(`/jobs/${id}`);
