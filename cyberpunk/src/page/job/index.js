import {useEffect} from "react";
import {redirectToAuthPageIfNotConnected} from "../../service/local-auth";
import JobCard from "../../component/JobCard";

const Job = (props) => {
    useEffect(() => redirectToAuthPageIfNotConnected(), [])

    const jobs = props.jobs
    console.log(jobs)

    const jobList = jobs.map(element =>{ return(<JobCard />)})
    return (
        <div>
            {jobList}
        </div>
    );
};

export default Jobs;