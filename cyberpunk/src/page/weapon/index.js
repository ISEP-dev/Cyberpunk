import {useEffect} from 'react';
import {redirectToAuthPageIfNotConnected} from "../../service/local-auth";

const Weapon = () => {
    useEffect(() => redirectToAuthPageIfNotConnected(), [])

    return (
        <div className="flex">
            <Weapons/>
        </div>
    )
}

export default Weapon;