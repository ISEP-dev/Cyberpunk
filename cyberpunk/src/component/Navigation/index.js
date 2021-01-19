import {NavLink} from "react-router-dom";
import {signOut} from "../../service/local-auth";

export const tabsEnum = {
    MERCENARIES: {name: 'Mercenaries', path: '/mercenaries'},
    WEAPONS: {name: 'Weapons', path: '/weapons'},
    JOBS: {name: 'Jobs', path: '/jobs'},
}
const tabs = Object.values(tabsEnum);

const Navigation = () => {
    return (
        <nav className="fixed z-10 top-0 flex flex-row justify-center w-screen items-center">
            <div className="flex flex-row items-center p-1 shadow-xs bg-yellow-200 m-4 rounded-full w-min px-4 shadow-sm">
                {
                    tabs.map((t, i) =>
                        <NavLink to={t.path}
                                 key={i}
                                 className="flex flex-row items-center justify-center m-1 p-2.5 w-44 bg-gray-900 hover:bg-yellow-300 hover:text-black cursor-pointer text-white rounded-full"
                                 activeClassName="bg-yellow-400 text-gray-800">
                            {t.name}
                        </NavLink>
                    )
                }
                <div onClick={signOut} className="flex flex-row items-center justify-center m-1 ml-8 p-2.5 w-32 bg-gray-900 hover:bg-yellow-300 hover:text-black cursor-pointer text-white rounded-full">
                    Sign out
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
