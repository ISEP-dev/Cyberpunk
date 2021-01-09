import Modal from "../../component/Modal";
import {getAllMercs} from "../../service/merc";
import {useEffect} from "react";

const Merc = () => {

    useEffect(() => {
        getAllMercs().then((res) => {
            console.log(res)
        })
    }, [])

    const submit = () => {
        console.log("On modal submit example")
    }
    return (
        <div className="flex justify-center">
            Merc page
            <Modal title="Add a new merc" okButton="Create"
                   description={"It can be a text or HTML"} onSubmit={submit}/>
        </div>
    );
};

export default Merc;
