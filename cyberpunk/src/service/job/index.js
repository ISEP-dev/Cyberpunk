import axios from "axios";

export const getAllJobs = () => axios.get(`/jobs`)

export const createJobs = (fixer, title, description, henchmenCount, reward) =>
    axios.post(`/jobs`, { fixer, title, description, henchmenCount, reward})

export const completeJob = (jobId, mercId) => axios.post(`/jobs/complete/${jobId}/${mercId}`)
