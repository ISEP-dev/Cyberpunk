import MercsSelection from "../MercsSelection/index.js"
import {useState} from 'react';
import {updateMercWeaponAsync} from "../../service/merc";
import PropTypes from "prop-types";

const WeaponCard = ({weapon}) => {
    const [mercSelected, setMercSelected] = useState();

    const redBarre = (nbr) => {
        const rem = Math.round(4 * nbr / 25) * 4
        const width = 'bg-red-600 h-1.5 w-' + rem.toString()
        return (width)
    }

    const blueBarre = (nbr) => {
        const rem = Math.round(4 * nbr / 25) * 4
        const width = 'bg-blue-600 h-1.5 w-' + rem.toString()
        return (width)
    }

    const greenBarre = (nbr) => {
        const rem = nbr * 8
        const width = 'bg-green-600 h-1.5 w-' + rem.toString()
        return (width)
    }

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
                    <p className='text-sm'>Damage : {weapon.damage} </p>
                    <div className="border border-gray-600 w-64 h-2 mt-1.5">
                        <div className={redBarre(weapon.damage)}/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className='text-sm'>Accuracy : {weapon.accuracy}</p>
                    <div className="border border-gray-600 w-64 h-2 mt-1.5">
                        <div className={blueBarre(weapon.accuracy)}/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className='text-sm'>Speed : {weapon.firerate}</p>
                    <div className="border border-gray-600 w-64 h-2 mt-1.5">
                        <div className={greenBarre(weapon.firerate)}/>
                    </div>
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
