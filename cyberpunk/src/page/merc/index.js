import Modal from "../../component/Modal";
import MercCard from "../../component/MercCard";
import {createMercAsync, getAllMercsAsync} from "../../service/merc";
import {redirectToAuthPageIfNotConnected} from "../../service/local-auth";
import {useEffect, useState} from "react";

const Merc = () => {
    const [mercs, setMercs] = useState([])
    const [modalVisibility, setModalVisibility] = useState(false)
    const [nickname, setNickname] = useState("")
    const [legalAge, setLegalAge] = useState("")

    useEffect(() => {
        redirectToAuthPageIfNotConnected();
        getAllMercsAsync().then((res) => {
            setMercs(res.data)
        })
    }, [])


    const onModalSubmit = () => {
        if (!!nickname && !!legalAge) {
            createMercAsync(nickname, legalAge).then(res => {
                setMercs([...mercs, res.data])
            })
            setModalVisibility(false)
        } else {
            alert("You need to enter a nickname and a age")
        }
    }

    const createMercForm = () => (
        <div>
            <div className="my-2">
                Nickname
                <input type="text" name="nickname" required={true}
                       onChange={(e) => setNickname(e.target.value)}
                       className="ml-2 pl-0.5 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 shadow-sm border-2 border-gray-300 rounded-md"/>
            </div>
            <div className="my-2">
                Legal Age
                <input type="number" name="legalAge" required={true}
                       onChange={(e) => setLegalAge(e.target.value)}
                       className="ml-2 pl-0.5 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 shadow-sm border-2 border-gray-300 rounded-md"/>
            </div>
        </div>
    )

    return (
        <div className="flex justify-center flex-wrap">
            <div
                className="bg-gray-800 shadow-lg overflow-hidden sm:rounded-lg p-6 m-4 w-1/5
                text-white flex items-center justify-center cursor-pointer"
                onClick={() => setModalVisibility(true)}>
                <i className="fas fa-plus-circle text-6xl"/>
            </div>
            {
                mercs.map((merc, i) => <MercCard key={i} merc={merc}/>)
            }
            <Modal
                title="Add a new merc"
                okButton="Create"
                description={createMercForm()}
                onSubmit={onModalSubmit}
                visibility={modalVisibility} onClose={() => setModalVisibility(false)}/>
        </div>
    );
};

export default Merc;
