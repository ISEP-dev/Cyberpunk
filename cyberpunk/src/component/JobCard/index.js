import { getWeaponByIdAsync } from "../../service/weapon"
import {completeJobAsync} from "../../service/job";

const fakeMerc = {
    id: 3,
    weaponId: 1
}

const JobCard = ({job}) => {
    const fight = (job, merc) => {
        const weapon = getWeaponByIdAsync(merc.weaponId)
        let mercsLife = 100
        for(let k=0; k<job.henchmenCount;k++){
            let henchmenLife = 100
            while(henchmenLife>0){
                for(let i=0; i<weapon.firerate; i++){
                    if(Math.floor(Math.random() * 100) < weapon.accuracy){
                        henchmenLife -= weapon.power
                    } 
                } if(henchmenLife>0){
                    mercsLife-=10
                } if(mercsLife<=0){
                    // the mercs is killed
                    // Break
                }
            }
        }
        completeJobAsync(job.id, merc.id).then(res => console.log(res))
    }

    return (
        <div key={job.id} style={{minWidth: '25rem', width: '48%'}} className="rounded-md bg-gray-800 p-5 text-white grid justify-items-stretch space-y-4 mb-4">
            <h1 className="text-center font-bold text-yellow-400 text-2xl">{job.title}</h1>
            <div className="flex flex-row">
                <div className='w-3/5'>
                    <p className="break-words text-justify">{job.description}</p>
                </div>
                <div className='w-2/5 ml-4 flex flex-col justify-between'>
                    <p className="mb-1">Fixer: job.fixer}</p>
                    <p className="mb-1">Henchmen: {job.henchmenCount}</p>
                    <p className="mb-3">Reward: €${job.reward}</p>
                    <button className="bg-yellow-400 text-gray-900 h-10 rounded-sm w-full cursor-pointer hover:bg-yellow-300"
                            type="button"
                            onClick={() => fight(job, fakeMerc)}>Launch</button>
                </div>
            </div>
        </div>
    );
}
export default JobCard;
