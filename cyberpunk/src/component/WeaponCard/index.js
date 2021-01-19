import MercsSelection from "../MercsSelection/index.js"
import {useState} from 'react';
import {updateMercWeaponAsync} from "../../service/merc";
import PropTypes from "prop-types";
import ProgressBar from "../PorgressBar";
import Alert from "../Alert";

const WeaponCard = ({weapon, mercs}) => {
    const [mercSelected, setMercSelected] = useState("");
    const [alertVisibility, setAlertVisibility] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("success");

    const buy = () => {
        if (!mercSelected) {
            return;
        }

        if (mercSelected.eddies < weapon.price) {
            setAlertVisibility(true)
            setAlertType("error")
            setAlertMessage(mercSelected.nickname + " doesn't have enough eddies !!")
            return;
        }

        updateMercWeaponAsync(mercSelected.id, weapon.id).then(() => {
            setAlertVisibility(true)
            setAlertType("success")
            setAlertMessage(mercSelected.nickname + " bought " + weapon.name)
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
                    <MercsSelection mercs={mercs}
                                    onSelectMerc={merc => setMercSelected(merc)}
                                    mercSelected={mercSelected}/>
                    <button
                        className="p-2 h-10 mt-6 bg-yellow-400 text-gray-800 rounded-lg cursor-pointer hover:text-white hover:bg-gray-900"
                        onClick={buy} disabled={!mercSelected}>Buy
                    </button>
                </div>
            </div>
            <Alert text={alertMessage}
                   type={alertType} visibility={alertVisibility}
                   onClose={() => setAlertVisibility(false)}/>
        </div>
    )
}

WeaponCard.propTypes = {
    mercs: PropTypes.array.isRequired,
    weapon: PropTypes.object.isRequired,
}

export default WeaponCard;
