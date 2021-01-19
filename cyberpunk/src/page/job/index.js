import { useEffect, useState } from "react";
import { getFixerNameConnected, redirectToAuthPageIfNotConnected } from "../../service/local-auth";
import { createJobAsync, getAllJobsAsync } from "../../service/job";
import JobCard from "../../component/JobCard";
import Modal from "../../component/Modal";

const Jobs = (props) => {
  useEffect(() => redirectToAuthPageIfNotConnected(), []);

  // const jobs = props.jobs
  // console.log(jobs)

  const [jobs, setjobs] = useState([]);

  const [modalVisibility, setModalVisibility] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fixer, setFixer] = useState("");
  const [henchmenCount, setHenchmenCount] = useState("");
  const [reward, setReward] = useState("");

  useEffect(() => {
    getAllJobsAsync().then((res) => {
      let job = res.data;
      console.log(job);
      setjobs(job);
    });
  });

  const modalSubmit = () => {
      if (!!title && !!description && !!fixer && !!henchmenCount && !!reward){
          createJobAsync(fixer, title, description, henchmenCount, reward).then(res => {
              setjobs([...jobs, res.data])
          });
          setModalVisibility(false);
      }
  };

  const createJobForm = () => {
    return (
      <div>
        <div className="my-2">
          Title
          <input
            type="text"
            name="title"
            required={true}
            onChange={(e) => setTitle(e.target.value)}
            className="ml-2 pl-0.5 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 shadow-sm border-2 border-gray-300 rounded-md"
          />
        </div>
        <div className="my-2">
          Description
          <textarea
            name="description"
            required={true}
            onChange={(e) => setDescription(e.target.value)}
            className="ml-2 pl-0.5 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 shadow-sm border-2 border-gray-300 rounded-md"
          />
        </div>
        <div className="my-2">
          Fixer
          <input
            type="text"
            name="fixer"
            required={true}
            disabled={true}
            value={getFixerNameConnected()}
            onChange={(e) => setFixer(e.target.value)}
            className="ml-2 pl-0.5 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 shadow-sm border-2 border-gray-300 rounded-md"
          />
        </div>
        <div className="my-2">
          Henchmen
          <input
            type="number"
            name="henchmenCount"
            required={true}
            onChange={(e) => setHenchmenCount(e.target.value)}
            className="ml-2 pl-0.5 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 shadow-sm border-2 border-gray-300 rounded-md"
          />
        </div>
        <div className="my-2">
          Reward
          <input
            type="number"
            name="reward"
            required={true}
            onChange={(e) => setReward(e.target.value)}
            className="ml-2 pl-0.5 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 shadow-sm border-2 border-gray-300 rounded-md"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-center space-x-8 p-8">
      <div
        className="w-1/5 bg-gray-800 p-5 text-white flex items-center justify-center pb-3 cursor-pointer"
        onClick={() => setModalVisibility(true)}
      >
        <i className="fas fa-plus-circle text-5xl "></i>
      </div>
      {jobs.map((element) => {
        return <JobCard element={element} />;
      })}
      <Modal
        title={"Add new job"}
        okButton={"Create"}
        onSubmit={modalSubmit}
        visibility={modalVisibility}
        onClose={() => setModalVisibility(false)}
        description={createJobForm()}
      />
    </div>
  );
};

export default Jobs;
