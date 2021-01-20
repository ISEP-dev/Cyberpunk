import MercsSelection from "../MercsSelection/index.js"
import {useState} from 'react';
import {updateMercWeaponAsync} from "../../service/merc";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar";

const WeaponCard = ({weapon, mercs}) => {
    const [mercSelected, setMercSelected] = useState("");

    const buy = () => {
        if (!mercSelected) {
            return;
        }

        if (mercSelected.eddies < weapon.price) {
            message().error(mercSelected.nickname + " doesn't have enough eddies !!");
            return;
        }

        updateMercWeaponAsync(mercSelected.id, weapon.id).then(() => {
            message().success(mercSelected.nickname + " bought " + weapon.name);
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
                    <p className='text-sm w-1/5'>Damage</p>
                    <ProgressBar number={weapon.damage} color={"red"}/>
                </div>
                <div className="flex justify-between">
                    <p className='text-sm w-1/5'>Accuracy</p>
                    <ProgressBar number={weapon.accuracy} color={"blue"}/>
                </div>
                <div className="flex justify-between">
                    <p className='text-sm w-1/5'>Firerate</p>
                    <ProgressBar number={weapon.firerate * 10} color={"green"}/>
                </div>
                <p>Price : <span className="text-yellow-400">{weapon.price} €$</span></p>
                <div className='flex mt-2 justify-between'>
                    <MercsSelection className="w-full mr-2"
                                    mercs={mercs}
                                    onSelectMerc={merc => setMercSelected(merc)}
                                    mercSelected={mercSelected}/>
                    <button
                        className="p-2 w-16 h-10 mt-6 bg-yellow-300 text-gray-900 rounded-lg cursor-pointer hover:bg-yellow-400"
                        onClick={buy} disabled={!mercSelected}>
                        Buy
                    </button>
                </div>
            </div>
        </div>
    )
}

WeaponCard.propTypes = {
    mercs: PropTypes.array.isRequired,
    weapon: PropTypes.object.isRequired,
}

export default WeaponCard;
