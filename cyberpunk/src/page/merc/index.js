import { useEffect, useState } from "react";
import Modal from "../../component/Modal";
import MercCard from "../../component/MercCard";
import MercToCreateForm from "../../component/MercToCreateForm";
import { createMercAsync, getAllMercsAsync } from "../../service/merc";
import { redirectToAuthPageIfNotConnected } from "../../service/local-auth";

const Merc = () => {
    const [mercs, setMercs] = useState([])
    const [modalVisibility, setModalVisibility] = useState(false)
    const [form, setForm] = useState({ nickname: "", legalAge: "" })

    useEffect(() => {
        redirectToAuthPageIfNotConnected();
        getAllMercsAsync()
            .then((res) => setMercs(res.data))
            .catch(e => alert(`[Error] : ${e}`));
    }, [])

    const createMerc = () => {
        createMercAsync(form.nickname, form.legalAge)
            .then(res => {
                setMercs([...mercs, res.data]);
                setModalVisibility(false);
            })
            .catch(e => alert(`[Error] : ${e}`))
    }

    const onModalSubmit = () => {
        !form.nickname && !form.legalAge
            ? alert("You need to enter a nickname and a age")
            : createMerc();
    }

    return (
        <section className="flex justify-between flex-wrap m-12">
            <div className="hover:bg-gray-700 cursor-pointer bg-gray-800 shadow-lg overflow-hidden sm:rounded-lg
                    p-6 m-4 w-1/5 text-white flex items-center justify-center cursor-pointer"
                 onClick={() => setModalVisibility(true)}>
                <i className="fas fa-plus-circle text-6xl"/>
            </div>
            {
                mercs.map((merc, i) => <MercCard key={i} merc={merc}/>)
            }
            <Modal
                title="Add a new merc"
                okButton="Create"
                description={<MercToCreateForm onFormChange={f => setForm(f)} />}
                onSubmit={onModalSubmit}
                visibility={modalVisibility}
                onClose={() => setModalVisibility(false)}/>
        </section>
    );
};

export default Merc;
