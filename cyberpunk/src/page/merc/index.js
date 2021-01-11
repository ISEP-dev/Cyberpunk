import Modal from "../../component/Modal";
import {getAllMercs} from "../../service/merc";
import {useEffect, useState} from "react";
import Weapons from "../../component/Modal/Weapons";
import {getAllWeapons} from "../../service/weapon";

const Merc = () => {
    const [weapons, setWeapons] = useState([])
    useEffect(() => {
        getAllWeapons().then((res) => {
            let weapon = res.data
            console.log(weapon)
            setWeapons(weapon)

        })
    }, [])

    const submit = () => {
        console.log("On modal submit example")
    }
    return (
        // <div className="flex justify-center">
        //     Merc page
        //     <Modal title="Add a new merc" okButton="Create"
        //            description={"It can be a text or HTML"} onSubmit={submit}/>
        // </div>
        <div>
            <Weapons weapons = {weapons}/>
        </div>
    );
};

export default Merc;
