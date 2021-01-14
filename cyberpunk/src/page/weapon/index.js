import {useEffect, useState} from "react";
import {getAllWeaponsAsync} from "../../service/weapon";
import WeaponCard from "../../component/WeaponCard";
import { getAllMercsAsync } from "../../service/merc";

const Weapon = () => {
    const [weapons, setWeapons] = useState([])
    const [mercs, setMercs] = useState([])
    useEffect(() => {
        getAllWeaponsAsync().then((res) => {
            let weapon = res.data
            console.log(weapon)
            setWeapons(weapon)
        })

        getAllMercsAsync().then((res) => {
            let merc = res.data
            console.log(merc)
            setMercs(merc)
        })
    }, [])

    return (
        <div className="flex flex-wrap w-full">
            {
                weapons.map(element => <WeaponCard element={element} mercs={mercs}/>)
            }
        </div>
    )
}

export default Weapon;
