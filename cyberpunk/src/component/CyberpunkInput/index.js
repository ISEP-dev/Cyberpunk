import PropTypes from "prop-types";

const CyberpunkInput = ({label, onChange, isDisabled, defaultValue, type, min}) => {
    return (
        <div className="my-2 flex flex-col w-full">
            <span className="text-xs text-white">{ label }</span>
            <input
                type={type}
                name={label}
                min={min}
                required={true}
                disabled={isDisabled}
                defaultValue={defaultValue}
                onChange={(e) => onChange(e.target.value)}
                className={`${isDisabled ? "bg-gray-300 text-gray-700" : "bg-white text-gray-900"} w-full pl-2 focus:outline-none focus:ring-yellow-400 focus:border-gray-300 shadow-sm border-2 rounded-md h-8`}
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
