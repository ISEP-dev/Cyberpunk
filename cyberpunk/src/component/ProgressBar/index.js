import PropTypes from "prop-types";

const ProgressBar = ({ number, color, unity }) => (
    <div className="w-full relative px-1.5 -my-0.5">
        <div className="absolute mt-1.5 bg-gray-600 rounded-full w-full h-3"/>
        <div className={`absolute mt-1.5 bg-${color}-600 rounded-full w-1/2 h-3`} style={{width: `${color === "green" ? number * 10 : number}%`}}/>
        <div className="absolute mt-1 w-1/2 text-white text-xs left-5">
            { number } { unity }
        </div>
    </div>
)

ProgressBar.propTypes = {
    number: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    unity: PropTypes.string.isRequired,
}


export default ProgressBar
