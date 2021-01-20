import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { getMercByIdAsync } from "../../service/merc";
import { message } from "../../service/notification";

const MercsSelection = ({ onSelectMerc, mercSelected, mercs, isDisabled, className }) => {
    const [mercsFiltered, setMercsFiltered] = useState([]);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [search, setSearch] = useState("");
    let dropdownRef = useRef();

    useEffect(() => {
        const mercsAlived = mercs.filter(m => m.isAlive);
        const mercsFilteredBySearch = !search
            ? mercsAlived
            : mercsAlived.filter(c => c.nickname.toLowerCase().includes(search.toLowerCase()));
        setMercsFiltered(mercsFilteredBySearch);
    }, [mercs, search]);

    useEffect(() => {
        window.document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    const handleSelectMerc = (idMerc) => {
        setDropdownVisible(!isDropdownVisible);
        getMercByIdAsync(idMerc)
            .then(merc => onSelectMerc(merc))
            .catch(e => message().error(e));
    }

    const handleClickOutside = (e) => {
        const isOutsideClicked = !dropdownRef.current.contains(e.target);
        if (isOutsideClicked) {
            setDropdownVisible(false);
        }
    }

    return (
        <div className={className}>
            <label id="listbox-label" className="block text-sm font-medium text-gray-300">Mercenaries</label>
            <div className="mt-1 relative">
                <button type="button"
                        disabled={isDisabled}
                        onClick={() => setDropdownVisible(!isDropdownVisible)}
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                        className={`${!isDisabled ? "bg-white cursor-pointer" : "bg-gray-200" }relative flex items-center w-full h-10 border border-gray-300 rounded-md shadow-sm pl-3 pr-2 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}>
                        <span className={`ml-3 block truncate ${!!mercSelected ? 'text-black' : 'text-gray-400'}`}>
                            {!!mercSelected ? mercSelected.nickname : "Please select a merc"}
                        </span>
                        <i className={`ml-auto fas ${isDropdownVisible ? "fa-chevron-up" : "fa-chevron-down" } text-gray-400`}/>
                </button>

                <div ref={dropdownRef} className={`absolute mt-1 w-full rounded-md bg-white z-10 shadow-lg ${!isDropdownVisible ? "hidden" : "" }`}>
                    <label className="relative">
                        <input className="text-gray-900 outline-none border-b-1 border-gray-200 p-2 w-full"
                               type="text"
                               onChange={e => setSearch(e.target.value)} value={search}/>
                        <i className="fas fa-search absolute top-1 right-2 text-gray-900"/>
                    </label>
                    <ul className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {
                            mercsFiltered.map((merc, i) => (
                                <li key={i}
                                    onClick={() => handleSelectMerc(merc.id)}
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
    )
}

MercsSelection.defaultProps = {
    mercSelected: {},
    isDisabled: false,
    className: ""
}

MercsSelection.propTypes = {
    onSelectMerc: PropTypes.func.isRequired,
    mercSelected: PropTypes.object,
    mercs: PropTypes.array.isRequired,
    isDisabled: PropTypes.bool,
    className: PropTypes.string
}

export default MercsSelection;
