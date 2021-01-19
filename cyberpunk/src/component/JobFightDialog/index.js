import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import FightService from "../../service/fight.service";
import { killMercAsync } from "../../service/merc";
import { completeJobAsync } from "../../service/job";
import FightComments from "../FightComments";
import background from '../../asset/launch-game.gif';
import backgroundAfterVictory from '../../asset/victory-job.gif';
import backgroundAfterDefeat from '../../asset/defeat-job.gif';

const JobFightDialog = ({visibility, merc, weapon, job, onClose}) => {
    const [isPlayed, setIsPlayed] = useState(false);
    const [isFightEnded, setIsFightEnded] = useState(false);
    const [mercAfterJob, setMercAfterJob] = useState({});
    const [newComments, setNewComments] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => setComments(c =>[...c, ...newComments]), [newComments]);

    const handleComments = useCallback((commentsToAdd) => setNewComments(commentsToAdd), []);

    useEffect(() => {
        if (!mercAfterJob.isAlive) {
            killMercAsync(mercAfterJob.id)
                .then(() => alert(`${mercAfterJob.nickname} met the death..`))
                .catch(e => alert(e));
        }
    }, [mercAfterJob]);

    const play = () => {
        setIsPlayed(true);
        FightService.launchAsync(merc, weapon, job, handleComments)
            .then(mercAfterJob => setMercAfterJob(mercAfterJob))
            .catch(e => alert('Impossible to launch the job'))
            .finally(() => {
                setIsPlayed(false);
                setIsFightEnded(true);
            });
    }

    const earnEddies = () => {
        completeJobAsync(job.id, mercAfterJob.id)
            .then(() => alert("Good job, your eddies are in your pocket !"))
            .catch(e => alert(e));
    }

    return (
        <div className={`z-20 w-full h-screen fixed top-0 left-0 ${!visibility ? 'hidden' : ''}`}>
            <div className="absolute z-30 w-full flex flex-col items-center justify-center h-full">
            {
                isPlayed && (
                    <div className="w-1/2 h-full m-28 bg-white rounded-md text-gray-900 overflow-y-scroll">
                        <FightComments comments={comments}/>
                    </div>
                )
            }

            {
                isFightEnded && (
                    <div className="relative w-1/2 h-full m-28 bg-white rounded-md text-gray-900">
                        <img className="w-full h-full absolute"
                             alt="background"
                             src={mercAfterJob.isAlive ? backgroundAfterVictory : backgroundAfterDefeat}/>

                        <div className="flex flex-row items-end justify-center h-full w-full absolute">
                            {
                                mercAfterJob.isAlive
                                    ? (
                                        <button className="rounded-md p-4 m-3 text-xl text-white hover:bg-yellow-500 bg-yellow-300" onClick={earnEddies}>
                                            <i className="fas fa-gift mr-2"/>
                                            Earn the eddies
                                        </button>
                                    )
                                    : (
                                        <button className="rounded-md p-4 m-3 text-xl text-white hover:bg-gray-800 bg-gray-900" onClick={onClose}>
                                            <i className="fas fa-sad-tear mr-2"/>
                                            Accept the death..
                                        </button>
                                    )

                            }
                        </div>
                    </div>
                )
            }

            {
                !isPlayed && !isFightEnded && (
                    <div className="relative w-1/2 h-full m-28 bg-white rounded-md text-gray-900">
                        <button className="absolute z-20 top-5 right-5 text-white" onClick={onClose}>
                            <i className="fas fa-times"/>
                        </button>
                        <img className="w-full h-full absolute" alt="background" src={background}/>
                        <div className="flex flex-col justify-center items-center h-full w-full absolute">
                            <h1 className="text-xl p-4 font-bold text-white">Click and launch the figth !</h1>
                            <button className="text-8xl text-white hover:text-yellow-500" onClick={play}>
                                <i className="fas fa-play"/>
                            </button>
                        </div>
                    </div>
                )
            }
            </div>
            <div className="fixed inset-0 h-full w-full transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-900 opacity-90"/>
            </div>

        </div>
    )
}

JobFightDialog.propTypes = {
    visibility: PropTypes.bool.isRequired,
    weapon: PropTypes.object.isRequired,
    job: PropTypes.object.isRequired,
    merc: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default JobFightDialog;