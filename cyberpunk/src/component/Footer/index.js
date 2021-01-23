import {getFixerNameConnected, isAlreadyRegistered} from "../../service/local-auth";

const Footer = () => {
    return (
        isAlreadyRegistered() &&
        <div className={`text-white fixed bottom-0 w-screen p-4 text-xs`}>
            * You are connected as <span className="text-md font-bold">{getFixerNameConnected()}</span>
        </div>
    )
}

export default Footer;
