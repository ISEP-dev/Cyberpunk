import { useEffect, useState } from "react";
import { createMercAsync, getAllMercsAsync } from "../../service/merc";
import Modal from "../../component/Modal";
import MercCard from "../../component/MercCard";
import MercToCreateForm from "../../component/MercToCreateForm";

const Merc = () => {
    const [mercs, setMercs] = useState([])
    const [modalVisibility, setModalVisibility] = useState(false)
    const [form, setForm] = useState({})
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        getAllMercsAsync()
            .then((res) => {
                const mercsSorted = res.data.sort((a, b) =>
                    (a.isAlive === b.isAlive) ? 0 : a.isAlive ? -1 : 1
                );
                setMercs(mercsSorted);
            })
            .catch(e => alert(`[Error] : ${e}`));
    }, [])

    useEffect(() => setIsValid(!!form.nickname && form.legalAge > 0), [form]);

    const createMerc = () => {
        createMercAsync(form.nickname, form.legalAge)
            .then(res => setMercs([res.data, ...mercs]))
            .catch(e => alert(`[Error] : ${e}`))
            .finally(() => setModalVisibility(false));
    }

    const onModalSubmit = () => {
        !isValid ? alert("You need to enter a nickname and a age") : createMerc();
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
                title="Create a mercenary"
                icon={<i className="fas fa-feather-alt"/>}
                okButton="Create"
                description={<MercToCreateForm onFormChange={f => setForm(f)}/>}
                onSubmit={onModalSubmit}
                visibility={modalVisibility}
                isSubmitDisabled={!isValid}
                onClose={() => setModalVisibility(false)}/>
        </section>
    );
};

export default Merc;
