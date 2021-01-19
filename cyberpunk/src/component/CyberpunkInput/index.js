import PropTypes from "prop-types";

const CyberpunkInput = ({label, onChange, isDisabled, defaultValue, type, min}) => {
    return (
        <div className="my-2">
            { label }
            <input
                type={type}
                name={label}
                min={min}
                required={true}
                disabled={isDisabled}
                defaultValue={defaultValue}
                onChange={(e) => onChange(e.target.value)}
                className="ml-2 pl-0.5 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 shadow-sm border-2 border-gray-300 rounded-md"
            />
        </div>
    )
}

CyberpunkInput.defaultProps = {
    label: "",
    type: "text",
    min: 0,
    isDisabled: false,
    defaultValue: "",
};

CyberpunkInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    min: PropTypes.number,
    isDisabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default CyberpunkInput;
