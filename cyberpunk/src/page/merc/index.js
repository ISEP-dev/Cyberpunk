import Modal from "../../component/Modal";
import {getAllMercsAsync} from "../../service/merc";
import {useEffect} from "react";

const Merc = () => {

    useEffect(() => {
        getAllMercsAsync().then((res) => {
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
