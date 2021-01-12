import {useEffect, useState} from "react";
import {getAllWeaponsAsync} from "../../service/weapon";
import WeaponCard from "../../component/WeaponCard";

const Weapon = () => {
    const [weapons, setWeapons] = useState([])
    useEffect(() => {
        getAllWeaponsAsync().then((res) => {
            let weapon = res.data
            console.log(weapon)
            setWeapons(weapon)
        })
    }, [])

    return (
        <div className="flex flex-wrap w-full">
            {
                weapons.map(element => <WeaponCard element={element}/>)
            }
        </div>
    )
}

export default Weapon;
