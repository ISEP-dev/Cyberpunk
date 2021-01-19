import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const AlertType = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info"
}

const Alert = ({text, type, timeout, visibility, onClose}) => {
    const [color, setColor] = useState("")
    const [icon, setIcon] = useState("")

    useEffect(() => {
        if (type === AlertType.success) {
            setColor("green")
            setIcon("check-circle")
        } else if (type === AlertType.error) {
            setColor("red")
            setIcon("exclamation-circle")
        } else if (type === AlertType.warning) {
            setColor("yellow")
            setIcon("exclamation-triangle")
        } else if (type === AlertType.info) {
            setColor("blue")
            setIcon("info-circle")
        }
        const timer = setTimeout(onClose, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [visibility])

    return (
        <div
            className={`fixed top-5 left-0 right-0 mx-auto bg-${color}-200 px-6 py-4 my-4 rounded-md text-lg flex items-center justify-center w-1/4 z-20 ${visibility ? "block" : "hidden"} `}>
            <i className={`fas fa-${icon} text-${color}-800 mr-2`}/>
            <span className={`text-${color}-800`}>{text}</span>
        </div>
    )
}

Alert.defaultProps = {
    type: "success",
    timeout: 5000,
    visibility: false
}

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.PropTypes.oneOf([AlertType.success, AlertType.error, AlertType.warning, AlertType.info]).isRequired,
    timeout: PropTypes.number.isRequired,
    visibility: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Alert
