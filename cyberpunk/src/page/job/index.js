import JobCard from "../../component/JobCard";

const Jobs = (props) => {

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