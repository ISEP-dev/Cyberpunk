import Modal from "../../component/Modal";

const Merc = () => {

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
