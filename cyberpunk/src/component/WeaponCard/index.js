import MercsSelection from "../MercsSelection/index.js"
import {useState} from 'react';
import {updateMercWeaponAsync} from "../../service/merc";
import PropTypes from "prop-types";
import ProgressBar from "../PorgressBar";

const WeaponCard = ({weapon}) => {
    const [mercSelected, setMercSelected] = useState("");

    const buy = () => {
        if (!mercSelected) {
            return;
        }

        if (mercSelected.eddies < weapon.price) {
            alert(mercSelected.nickname + " doesn't have enough eddies !!");
            return;
        }

        updateMercWeaponAsync(mercSelected.id, weapon.id).then(_ => {
            console.log(mercSelected);
            alert(mercSelected.nickname + "bought" + weapon.name)
        });
    }

    return (
        <div key={weapon.id}
             className="flex flex-col justify-between bg-gray-800 shadow-lg sm:rounded-lg w-96 p-6 m-4 text-white">
            <div>
                <div className='flex justify-center mb-2'>
                    <h1 className='font-bold underline '>{weapon.name}</h1>
                </div>
                <p>{weapon.description}</p>
            </div>
            <div className="mt-3">
                <div className="flex justify-between">
                    <p className='text-sm'>Damage</p>
                    <ProgressBar number={weapon.damage} color={"red"}/>
                </div>
                <div className="flex justify-between">
                    <p className='text-sm'>Accuracy</p>
                    <ProgressBar number={weapon.accuracy} color={"blue"}/>
                </div>
                <div className="flex justify-between">
                    <p className='text-sm'>Firerate</p>
                    <ProgressBar number={weapon.firerate * 10} color={"green"}/>
                </div>
                <p>Price : <span className="text-yellow-400">{weapon.price} €$</span></p>
                <div className='flex mt-2 justify-between'>
                    <MercsSelection onSelectMerc={merc => setMercSelected(merc)}
                                    mercSelected={mercSelected}/>
                    <button
                        className="p-2 h-10 mt-6 bg-yellow-400 text-gray-800 rounded-lg cursor-pointer hover:text-white hover:bg-gray-900"
                        onClick={buy} disabled={!mercSelected}>Buy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WeaponCard;

WeaponCard.propTypes = {
    weapon: PropTypes.object.isRequired,
}
