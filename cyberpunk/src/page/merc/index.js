import Modal from "../../component/Modal";
import {useEffect, useState} from "react";
import MercTable from "../../component/Modal/MercTable";
import {getAllMercsAsync} from "../../service/merc";

const Merc = () => {

    const [mercs, setMercs] = useState([[0, "Magali", 1, 0, 0, 1], [1, "Mathilde", 12, 12, 12, 12] ])

    useEffect(() => {
        getAllMercsAsync().then((res) => {
            console.log("Je suis là")
            let mercs = res.data
            let newMercList = []

            for(let index = 0 ; mercs[index] ; index++) {

            let array = Object.keys(mercs[index]).map(function(key) {
                return mercs[index][key];
             });
                newMercList.push(array)
            }

            setMercs(newMercList)
        })
    }, [])


    const submit = () => {
        // console.log(nickname)
        // console.log(legalAge)
        // createNewMerc(nickname, legalAge)
        console.log(mercs)
        //si les champs nickname et legal Age ne sont pas vides ca doit ajouter le nouveau merc à la BDD
        console.log("The new merc has been added")
    }


    return (
        <div className="flex justify-center">
            {console.log(mercs)}
            List of Mercs
            <MercTable mercsList={mercs}/>
            <input type="button" value="Add a new Merc"/>
            <Modal
                title="Add a new merc"
                okButton="Create"
                description={
                    <form>
                        <label>
                            Nickname :(required)
                            <input id="nickname" type="text" name="nickname" required={false}/>
                        </label>
                        <label>
                            Legal Age : (required)
                            <input id="legalAge" type="text" name="legalAge" required={false}/>
                        </label>
                        <label>
                            Weapon Type :
                            <input type="text" name="weapon" />
                        </label>
                        <label>
                            Eddies :
                            <input type="text" name="eddies" />
                        </label>
                    </form>}
                onSubmit={submit(/*document.getElementById("nickname"), document.getElementById("legalAge")*/)}
                visibility={false}/>

        </div>
    );
};

export default Merc;
