// import Modal from "../../component/Modal";
import {getAllWeapons} from "../../service/weapon";
import {useEffect} from "react";
import { element } from "prop-types";

const Weapons = (props) => {

    // useEffect(() => {
    //     getAllWeapons().then((res) => {
    //         console.log(res.data)
    //     })
    // }, [])
    const weapons = props.weapons
    const weaponList = weapons.map(element =>{


        return(
            <div class="min-h-screen bg-gray-100 w-52">
              <h1>{element.name}</h1>
              <p>{element.description}</p>
              <p>{element.firerate}</p>
              <p>{element.damage}</p>
              <p>{element.accuracy}</p>

            </div>
        )
    })
    console.log(weapons)
    return (
        <div class="flex-1">
            {weaponList}
        </div>
    );
};

export default Weapons;