import {getAllMercsAsync} from "../../service/merc";
import {useEffect} from "react";

const Merc = () => {
    useEffect(() => {
        getAllMercsAsync().then((res) => {
            console.log(res)
        })
    }, [])

    return (
        <div>
            Merc page
        </div>
    );
};

export default Merc;
