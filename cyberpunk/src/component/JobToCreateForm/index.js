import { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { getFixerNameConnected } from "../../service/local-auth";
import CyberpunkInput from "../CyberpunkInput";

const JobToCreateForm = ({onFormChange}) => {
    const [formChange, setFormChange] = useState({
        title: "",
        description: "",
        fixer: getFixerNameConnected(),
        henchmenCount: 0,
        reward: 0,
    });

    useEffect(() => onFormChange(formChange), [formChange, onFormChange]);

    const handleTitleChange = (title) => setFormChange({...formChange, title });
    const handleDescriptionChange = (description) => setFormChange({...formChange, description });
    const handleFixerChange = (fixer) => setFormChange({...formChange, fixer });

    const handleHenchmenCountChange = (henchmenCount) => {
        if (henchmenCount < 0) {
            alert("Henchmen is inferior at 0");
        }
        setFormChange({...formChange, henchmenCount});
    };
    const handleRewardChange = (reward) => {
        if (reward <= 0) {
            alert("Reward must be higher than 0");
        }

        setFormChange({...formChange, reward});
    };

    return (
        <div>
            <CyberpunkInput onChange={handleTitleChange} label="Title"/>
            <CyberpunkInput onChange={handleDescriptionChange} label="Description"/>
            <CyberpunkInput onChange={handleFixerChange} label="Fixer" isDisabled={true} defaultValue={getFixerNameConnected()}/>
            <CyberpunkInput onChange={handleHenchmenCountChange} type="number" label="Henchmen number"/>
            <CyberpunkInput onChange={handleRewardChange} type="number" label="Reward"/>
        </div>
    )
}

JobToCreateForm.propTypes = {
    onFormChange: PropTypes.func.isRequired,
}

export default JobToCreateForm;
