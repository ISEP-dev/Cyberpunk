import { useEffect, useState } from "react";
import { redirectToAuthPageIfNotConnected } from "../../service/local-auth";
import { createJobAsync, getAllJobsAsync } from "../../service/job";
import JobCard from "../../component/JobCard";
import Modal from "../../component/Modal";
import JobToCreateForm from "../../component/JobToCreateForm";

const Jobs = () => {
    const [jobs, setjobs] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [isJobToCreateValid, setIsValid] = useState(false);
    const [jobToCreate, setJobToCreate] = useState({});

    useEffect(() => {
        redirectToAuthPageIfNotConnected();
        getAllJobsAsync()
            .then((res) => setjobs(res.data))
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
        if (!isJobToCreateValid) {
            alert("Sorry but it's not a valid form");
            return;
        }

        createJobAsync(jobToCreate)
            .then(res => {
                setjobs([...jobs, res.data]);
            })
            .catch(e => alert(`[Error] : ${e}`))
            .finally(() => setModalVisibility(false))
    };

    return (
        <section className="flex flex-row flex-wrap justify-between justify-center m-10 pt-4">
            <div style={{width: '48%'}} className="rounded-md hover:bg-gray-700 mb-4 mr-2 bg-gray-800 p-5 text-white flex items-center justify-center pb-3 cursor-pointer"
                onClick={() => setModalVisibility(true)}>
                <i className="fas fa-plus-circle text-5xl "/>
            </div>

            {
                jobs.map((job, i) => <JobCard key={i} job={job}/>)
            }

            <Modal
                title={"Add new job"}
                okButton={"Create"}
                onSubmit={modalSubmit}
                visibility={modalVisibility}
                onClose={() => setModalVisibility(false)}
                description={<JobToCreateForm onFormChange={j => setJobToCreate(j)}/>}
            />
        </section>
    );
};

export default Jobs;
