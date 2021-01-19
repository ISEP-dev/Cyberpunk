import { useState, useEffect } from 'react';
import PropTypes from "prop-types";

const MercToCreateForm = ({onFormChange}) => {
    const [formChange, setFormChange] = useState();

    useEffect(() => {
        if (!formChange) return
        onFormChange(formChange)
    }, [formChange]);

    const handleLegalAgeChange = (legalAge) => {
        if (legalAge < 0) {
            alert("It's not a valid age.. !");
            return;
        }
        setFormChange({...formChange, legalAge })
    }

    const handleNicknameChange = (nickname) => {
        setFormChange({...formChange, nickname })
    }

    return (
        <div>
            <div className="my-2">
                Nickname
                <input type="text" name="nickname" required={true}
                       onChange={(e) => handleNicknameChange(e.target.value)}
                       className="ml-2 pl-0.5 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 shadow-sm border-2 border-gray-300 rounded-md"/>
            </div>
            <div className="my-2">
                Legal Age
                <input type="number" name="legalAge" required={true}
                       onChange={(e) => handleLegalAgeChange(e.target.value)}
                       className="ml-2 pl-0.5 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 shadow-sm border-2 border-gray-300 rounded-md"/>
            </div>
        </div>
    );
}

MercToCreateForm.propTypes = {
    onFormChange: PropTypes.func.isRequired,
}

export default MercToCreateForm
