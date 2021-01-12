import { useEffect, useState } from "react";
import {redirectToAuthPageIfNotConnected} from "../../service/local-auth";
import { getAllJobsAsync } from "../../service/job"
import JobCard from "../../component/JobCard";

const Job = (props) => {
    useEffect(() => redirectToAuthPageIfNotConnected(), [])

    // const jobs = props.jobs
    // console.log(jobs)

    const [jobs, setjobs] = useState([])

    useEffect(() => {
        getAllJobsAsync().then((res) => {
            let job = res.data
            console.log(job)
            setjobs(job)
        })
    })

    return (
        <div className="flex flex-wrap justify-center space-x-8 p-8">
            {jobs.map(element => { return(<JobCard element={element}/>)})}
        </div>
    );
};

export default Jobs;