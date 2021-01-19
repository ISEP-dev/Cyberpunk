const ProgressBar = ({number, color}) => (
    <div className="w-full relative px-1.5 -my-0.5">
        <div className="absolute mt-1.5 bg-gray-600 rounded-full w-full h-4"/>
        <div className={`absolute mt-1.5 bg-${color}-600 rounded-full w-1/2 h-4`}
             style={{width: `${number}%`}}/>
        <div className="absolute mt-1.5 w-1/2 text-white text-xs text-center">{number}</div>
    </div>
)

export default ProgressBar