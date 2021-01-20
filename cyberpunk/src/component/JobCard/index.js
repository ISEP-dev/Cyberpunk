import { useState } from 'react';
import PropTypes from "prop-types";
import { message } from "../../service/notification";
import MercsSelection from "../MercsSelection";
import JobFightDialog from "../JobFightDialog";


const JobCard = ({job, mercs, onJobAvailabilityChange}) => {
    const [mercSelected, setMercSelected] = useState(null);
    const [isFightDialogVisible, setIsFightDialogVisible] = useState(false);

    const fight = () => {
        if (!job.isAvailable) {
            message().error("You can't launch the job because he is unavailable.");
            return;
        }

        if (!mercSelected) {
            message().warning("You need to select a merc before launch the job !");
            return;
        }

        setIsFightDialogVisible(true);
    }

    const closeJobFightDialog = (jobUpdated) => {
        setIsFightDialogVisible(false);
        setMercSelected(null);
        if (jobUpdated.isAvailable) {
            return;
        }

        onJobAvailabilityChange(jobUpdated);
    }

    return (
        <div style={{minWidth: '35rem', width: '48%'}}
             className={`${!job.isAvailable ? "bg-gray-400 opacity-90" : "bg-gray-800"} rounded-md p-5 text-white grid justify-items-stretch mb-4`}>
            <h1 className="text-center font-bold text-white text-xl mb-4">{job.title}</h1>
            <div className="flex flex-row">
                <div className='w-3/5'>
                    <p className="break-words text-justify">{job.description}</p>
                </div>
                <div className='w-2/5 ml-4 flex flex-col justify-between'>
                    <p className="mb-1">Fixer: {job.fixer}</p>
                    <p className="mb-1">Henchmen: {job.henchmenCount}</p>
                    <p className="mb-3">Reward: €${job.reward}</p>
                    <MercsSelection mercs={mercs} onSelectMerc={m => setMercSelected(m)} mercSelected={mercSelected} isDisabled={!job.isAvailable}/>
                    <button className={`${job.isAvailable 
                                ? "cursor-pointer hover:bg-yellow-300 bg-yellow-400 text-gray-900" 
                                : "pointer-event-none bg-gray-500 text-gray-700"} h-10 rounded-sm w-full mt-2`
                            }
                            disabled={!job.isAvailable}
                            type="button"
                            onClick={fight}><i className="fas fa-play mr-2"/>
                            Launch
                    </button>
                </div>
            </div>

            {
                !!mercSelected &&
                <JobFightDialog visibility={isFightDialogVisible}
                                merc={mercSelected}
                                job={job}
                                onClose={closeJobFightDialog}/>
            }

        </div>
    );
}

JobCard.propTypes = {
    job: PropTypes.object.isRequired,
    mercs: PropTypes.array.isRequired,
    onJobAvailabilityChange: PropTypes.func.isRequired,
}

export default JobCard;
