import {useEffect} from 'react';
import {redirectToAuthPageIfNotConnected} from "../../service/local-auth";

const Weapon = () => {
    useEffect(() => redirectToAuthPageIfNotConnected(), [])

    return (
        <div className="flex">
            Weapon page
        </div>
    )
}

export default Weapon;