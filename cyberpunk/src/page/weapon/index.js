import {useEffect, useState} from "react";
import {getAllWeaponsAsync} from "../../service/weapon";
import WeaponCard from "../../component/WeaponCard";

const Weapon = () => {
    const [weapons, setWeapons] = useState([])
    useEffect(() => {
        getAllWeaponsAsync().then((res) => {
            setWeapons(res.data);
        })
    }, [])

    return (
        <div className="flex flex-wrap w-full">
        {
            weapons.map((weapon, i) => <WeaponCard key={i} weapon={weapon}/>)
        }
        </div>
    )
}

export default Weapon;
