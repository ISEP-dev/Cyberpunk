import { useEffect, useState } from "react";
import { createJobAsync, getAllJobsAsync } from "../../service/job";
import { getAllMercsAsync } from "../../service/merc";
import JobCard from "../../component/JobCard";
import Modal from "../../component/Modal";
import JobToCreateForm from "../../component/JobToCreateForm";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [mercs, setMercs] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [isJobToCreateValid, setIsValid] = useState(false);
    const [jobToCreate, setJobToCreate] = useState({});

    useEffect(() => {
        getAllJobsAsync()
            .then((res) => {
                const jobsSorted = res.data.sort((a, b) =>
                    (a.isAvailable === b.isAvailable) ? 0 : a.isAvailable ? -1 : 1
                );
                setJobs(jobsSorted);
            })
            .catch(e => alert(`[Error]: ${e}`));

        getAllMercsAsync()
            .then((res) => setMercs(res.data))
            .catch(e => alert(`[Error]: ${e}`));
    }, []);

    useEffect(() => {
        const isValid = !!jobToCreate.title
            && !!jobToCreate.description
            && !!jobToCreate.fixer
            && jobToCreate.henchmenCount >= 0
            && jobToCreate.reward > 0;
        setIsValid(isValid);
    }, [jobToCreate]);

    const modalSubmit = () => {
        !isJobToCreateValid ? alert("Sorry but it's not a valid form") : createJob();
    };

    const createJob = () => {
        createJobAsync(jobToCreate)
            .then(res => setJobs([res.data, ...jobs]))
            .catch(e => alert(`[Error] : ${e}`))
            .finally(() => setModalVisibility(false))
    }

    const onJobAvailabilityChange = (jobChanged) => {
        const jobsFiltered = jobs.filter(j => j.id !== jobChanged.id);
        setJobs([...jobsFiltered, jobChanged]);
    }
    return (
        <section className="flex flex-row flex-wrap justify-between justify-center m-10 pt-4">
            <div style={{width: '48%'}} className="rounded-md hover:bg-gray-700 mb-4 mr-2 bg-gray-800 p-5 text-white flex items-center justify-center pb-3 cursor-pointer"
                onClick={() => setModalVisibility(true)}>
                <i className="fas fa-plus-circle text-5xl "/>
            </div>

            {
                jobs.map((job, i) =>
                    <JobCard key={i} mercs={mercs} job={job} onJobAvailabilityChange={onJobAvailabilityChange}/>
                )
            }

            <Modal
                title={"Create a job"}
                icon={<i className="fas fa-feather-alt"/>}
                okButton={"Create"}
                onSubmit={modalSubmit}
                visibility={modalVisibility}
                onClose={() => setModalVisibility(false)}
                description={<JobToCreateForm onFormChange={j => setJobToCreate(j)}/>}
                isSubmitDisabled={!isJobToCreateValid}
            />
        </section>
    );
};

export default Jobs;
