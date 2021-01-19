import axios from "axios";

export const getAllJobsAsync = () => axios.get(`/jobs`)

export const createJobAsync = ({fixer, title, description, henchmenCount, reward}) =>
    axios.post(`/jobs`, { fixer, title, description, henchmenCount, reward })

export const completeJobAsync = (idJob, idMerc) => axios.post(`/jobs/complete`, { idJob, idMerc })
