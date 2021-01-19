import { getAllMercsAsync, getMercByIdAsync } from "../../service/merc";
import { useState, useEffect } from "react";

const MercsSelection = ({ onSelectMerc, mercSelected }) => {
    const [mercs, setMercs] = useState([])
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        getAllMercsAsync().then((res) => {
            setMercs(res.data)
        })
    }, []);

    const handleSelectMerc = (idMerc) => {
        setDropdownVisible(!isDropdownVisible);
        getMercByIdAsync(idMerc)
            .then(merc => onSelectMerc(merc))
            .catch(e => console.log(e));
    }

    return (
        <div>
            <label id="listbox-label" className="block text-sm font-medium text-gray-300">Mercenaries</label>
            <div className="mt-1 relative w-64">
                <button type="button"
                        onClick={() => setDropdownVisible(!isDropdownVisible)}
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                        className="relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span className={`ml-3 block truncate ${!!mercSelected ? 'text-black' : 'text-gray-400'}`}>
                            {!!mercSelected ? mercSelected.nickname : "Please, select a merc"}
                        </span>
                </button>

                <div className={`absolute mt-1 w-full rounded-md bg-white shadow-lg ${!isDropdownVisible ? "hidden" : "" }`}>
                    <ul role="listbox" aria-labelledby="listbox-label"
                        aria-activedescendant="listbox-item-3"
                        className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {
                            mercs.map((merc, i) => (
                                <li key={i}
                                    onClick={() => handleSelectMerc(merc.id)}
                                    role="option"
                                    className="text-gray-900 hover:text-white hover:bg-gray-800 cursor-pointer select-none relative py-2 pl-3 pr-9">
                                    <div className="flex items-center">
                                        {merc.nickname}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )}

export default MercsSelection;
