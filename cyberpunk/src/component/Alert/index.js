import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {NotificationType} from "../../model/notification";

const Alert = ({text, type, timeout}) => {
    const [visibility, setVisibility] = useState(true);
    const [color, setColor] = useState("")
    const [icon, setIcon] = useState("")

    useEffect(() => {
        if (type === NotificationType.success) {
            setColor("green")
            setIcon("check-circle")
        } else if (type === NotificationType.error) {
            setColor("red")
            setIcon("exclamation-circle")
        } else if (type === NotificationType.warning) {
            setColor("yellow")
            setIcon("exclamation-triangle")
        } else if (type === NotificationType.info) {
            setColor("blue")
            setIcon("info-circle")
        }
        const timer = setTimeout(() => setVisibility(false), timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [visibility, timeout, type])

    return (
        <div
            className={`mx-auto bg-${color}-200 px-6 py-4 my-4 rounded-md text-lg flex items-center justify-center w-1/2 ${visibility ? "block" : "hidden"} `}>
            <i className={`fas fa-${icon} text-${color}-800 mr-2`}/>
            <span className={`text-${color}-800`}>{text}</span>
            <i className="fas fa-times ml-2 cursor-pointer hover:text-gray-700 ml-auto" onClick={() => setVisibility(false)}/>
        </div>
    )
}

Alert.defaultProps = {
    type: "success",
}

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([NotificationType.success, NotificationType.error, NotificationType.warning, NotificationType.info]).isRequired,
    timeout: PropTypes.number.isRequired,
}

export default Alert
