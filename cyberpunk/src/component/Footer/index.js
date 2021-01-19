import {authRoutePath} from "../../service/local-auth";

const {getFixerNameConnected} = require("../../service/local-auth");

const Footer = () => {
    const isAuthPage = window.location.pathname === authRoutePath;

    return (
        <div className={`text-white fixed bottom-0 w-screen p-4 text-xs ${isAuthPage ? 'hidden' : ''}`}>
            * Your are connected as <span className="text-md font-bold">{getFixerNameConnected()}</span>
        </div>
    )
}

export default Footer;
