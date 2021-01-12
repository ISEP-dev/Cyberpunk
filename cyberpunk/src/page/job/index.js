import {useEffect} from "react";
import {redirectToAuthPageIfNotConnected} from "../../service/local-auth";

const Job = () => {
    useEffect(() => redirectToAuthPageIfNotConnected(), [])

    return (
        <div className="flex">
            Job page
        </div>
    )
}

export default Job;