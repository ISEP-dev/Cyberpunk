import {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import CyberpunkInput from "../CyberpunkInput";

const MercToCreateForm = ({ onFormChange }) => {
    const [formChange, setFormChange] = useState({ nickname: "", legalAge: 0 });

    useEffect(() => {
        if (!formChange) {
            return;
        }
        onFormChange(formChange);
    }, [formChange]);

    const handleLegalAgeChange = (legalAge) => {
        if (legalAge <= 0) {
            alert("It's not a valid age.. !");
        }
        setFormChange({...formChange, legalAge})
    }

    const handleNicknameChange = (nickname) => setFormChange({...formChange, nickname })

    return (
        <div>
            <CyberpunkInput onChange={handleNicknameChange} label="Nickname"/>
            <CyberpunkInput onChange={handleLegalAgeChange} type="number" label="Legal Age"/>
        </div>
    );
}

MercToCreateForm.propTypes = {
    onFormChange: PropTypes.func.isRequired,
}

export default MercToCreateForm
