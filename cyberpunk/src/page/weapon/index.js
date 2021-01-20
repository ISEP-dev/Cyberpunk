import {useEffect, useState} from "react";
import {getAllWeaponsAsync} from "../../service/weapon";
import WeaponCard from "../../component/WeaponCard";
import {getAllMercsAsync} from "../../service/merc";
import {message} from "../../service/notification";

const Weapon = () => {
    const [weapons, setWeapons] = useState([]);
    const [mercs, setMercs] = useState([]);
    useEffect(() => {
        getAllWeaponsAsync().then((res) => {
            setWeapons(res.data);
        })

        getAllMercsAsync()
            .then((res) => setMercs(res.data))
            .catch(e => message().error(e));
    }, [])

    return (
        <div className="flex flex-wrap w-full justify-center">
        {
            weapons.map((weapon, i) => <WeaponCard key={i} mercs={mercs} weapon={weapon}/>)
        }
        </div>
    )
}

export default Weapon;
