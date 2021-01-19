import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const Alert = ({text, type, timeout}) => {
    const [color, setColor] = useState("")
    const [icon, setIcon] = useState("")
    const [visibility, setVisibility] = useState(true)

    useEffect(() => {
        if (type === "success") {
            setColor("green")
            setIcon("check-circle")
        } else if (type === "error") {
            setColor("red")
            setIcon("exclamation-circle")
        } else if (type === "warning") {
            setColor("yellow")
            setIcon("exclamation-triangle")
        } else if (type === "info") {
            setColor("blue")
            setIcon("info-circle")
        }
        setTimeout(() => setVisibility(false), timeout)
    })
    
    return (
        <div
            className={`${visibility ? "block" : "hidden"} absolute top-5 left-0 right-0 mx-auto bg-${color}-200 px-6 py-4 my-4 rounded-md text-lg flex items-center justify-center w-1/4 z-20`}>
            <i className={`fas fa-${icon} text-${color}-800 mr-2`}/>
            <span className={`text-${color}-800`}>{text}</span>
        </div>
    )
}

Alert.defaultProps = {
    type: "success",
    timeout: 5000
}

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    timeout: PropTypes.number.isRequired
}

export default Alert
