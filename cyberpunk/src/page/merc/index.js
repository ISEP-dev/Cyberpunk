import {useEffect, useState} from "react";
import Modal from "../../component/Modal";
import MercCard from "../../component/MercCard";
import MercToCreateForm from "../../component/MercToCreateForm";
import {createMercAsync, getAllMercsAsync} from "../../service/merc";
import {redirectToAuthPageIfNotConnected} from "../../service/local-auth";
import {message} from "../../service/notification";

const Merc = () => {
    const [mercs, setMercs] = useState([])
    const [modalVisibility, setModalVisibility] = useState(false)
    const [form, setForm] = useState({nickname: "", legalAge: ""})

    useEffect(() => {
        getAllMercsAsync()
            .then((res) => setMercs(res.data))
            .catch(e => message().error(e));
    }, [])

    const createMerc = () => {
        createMercAsync(form.nickname, form.legalAge)
            .then(res => setMercs([...mercs, res.data]))
            .catch(e => alert(`[Error] : ${e}`))
            .finally(() => setModalVisibility(false));
    }

    const onModalSubmit = () => {
        if (!form.nickname && !form.legalAge) {
            message().warning("You need to enter a nickname and an age");
        } else {
            createMerc()
        }
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
                description={<MercToCreateForm onFormChange={f => setForm(f)}/>}
                onSubmit={onModalSubmit}
                visibility={modalVisibility}
                onClose={() => setModalVisibility(false)}/>
        </section>
    );
};

export default Merc;
