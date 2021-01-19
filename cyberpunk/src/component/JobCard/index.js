import { getWeaponByIdAsync } from "../../service/weapon"
import {completeJobAsync} from "../../service/job";


const JobCard = ({element}) => {
    const fight = (job,merc) => {
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
        completeJobAsync(job.id).then(res => console.log(res))
    }
    return (
        <div key={element.id} 
        className="w-1/5 min-w-min bg-gray-800 p-5 text-white grid justify-items-stretch space-y-4">
            <div className="text-center">
                <div><h1 className="font-bold text-yellow-400 text-2xl">{element.title}</h1></div>
            </div>
            <div className='flex'>
            <div className='w-3/5'>
                    <p className="break-words text-justify">{element.description}</p>
                </div>
                <div className='w-2/5 ml-4 flex flex-col justify-between'>
                    <div className='space-y-4'>
                        <p><b>Fixer:</b> {element.fixer}</p>
                        <p><b>Henchmen:</b> {element.henchmenCount}</p>
                        <p><b>Reward:</b> <b className="text-yellow-400">€${element.reward}</b></p>
                    </div>
                    <div  className="flex flex-row-reverse">
                        <form>
                            <input 
                            className="bg-yellow-200 text-gray-900 rounded-full p-2 cursor-pointer 
                            hover:bg-yellow-400" type="button" value="Apply" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default JobCard;