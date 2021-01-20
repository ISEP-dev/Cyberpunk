import {useState, useEffect} from "react";
import {isAlreadyRegistered, signIn} from "../../service/local-auth";
import {tabsEnum} from "../../component/Navigation";
import authBackgroungPage from "../../asset/auth-background-page.jpg";

const LocalAuth = () => {
    const [fixerName, setFixerName] = useState("");
    const [isVisible, setVisibility] = useState(false);

    useEffect(() => {
        if (isAlreadyRegistered()) {
            window.location.href = tabsEnum.MERCENARIES.path;
        }
    }, [])

    const auth = () => {
        if (!fixerName) {
            setVisibility(true);
            return;
        }

        signIn(fixerName);
    }

    return (
        <section className="h-screen w-screen bg-black text-white absolute top-0 right-0">
            <img alt="auth-background" className="fixed top-0 left-0 w-full h-screen" src={authBackgroungPage}/>
            <div className="absolute z-10 top-0 left-0 w-full h-full">
                <div className="flex align-middle items-center flex-col h-full w-1/2">
                    <div>
                        <div className="mt-1 relative shadow-sm text-black mt-72">
                            <label className="text-white text-xs">
                                Said me the name to write on your grave when you will be die *
                            </label>
                            <input type="text" name="price" id="price" onChange={e => setFixerName(e.target.value)}
                                   required
                                   className="block w-96 h-12 pl-7 pr-12 sm:text-sm"
                                   placeholder="Enter your name"/>
                            <p className={`text-red-400 text-xs italic p-1 ${!isVisible ? 'hidden' : ''}`}>
                                I will kill you if you don't write your name !!!! It's mandatory.
                            </p>
                            <button className="h-10 w-36 bg-yellow-300 mt-3 rounded-sm" onClick={auth}>
                                Run to the death
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default LocalAuth;
