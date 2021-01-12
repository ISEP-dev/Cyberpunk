import Modal from "../../component/Modal";
import {useEffect, useState} from "react";
import Weapons from "../../component/Modal/Weapons";
import {getAllWeapons} from "../../service/weapon";

const Weapon = () => {
    const [weapons, setWeapons] = useState([])
    useEffect(() => {
        getAllWeapons().then((res) => {
            let weapon = res.data
            console.log(weapon)
            setWeapons(weapon)
        })
    }, [])

    return (
        <div>
            <Weapons weapons = {weapons}/>
        </div>
    )
}

export default Weapon;