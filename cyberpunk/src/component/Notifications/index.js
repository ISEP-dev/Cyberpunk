import { useState, useEffect } from 'react';
import { message } from "../../service/notification";
import Alert from "../Alert";

const Notifications = () => {
    const [notification, setNotification] = useState();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => message().init(setNotification), [])

    useEffect(() => setNotifications(n => [...n, notification]), [notification])

    return (
        <div className="flex flex-col fixed bottom-5 right-5 z-20 w-full">
        {
            notifications.map((n, i) =>
                !n ? "" : <Alert key={i} text={n.text} type={n.type} timeout={n.timeout}/>
            )
        }
        </div>
    )

}

export default Notifications;
