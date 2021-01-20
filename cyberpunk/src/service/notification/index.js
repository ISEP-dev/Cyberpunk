import Notification, {NotificationType} from "../../model/notification";

class Message {
    init(setNotification) {
        this.setNotification = setNotification;
    }

    success(message) {
        this.setNotification(new Notification(message, NotificationType.success));
    }

    error(message) {
        this.setNotification(new Notification(message, NotificationType.error));
    }

    warning(message) {
        this.setNotification(new Notification(message, NotificationType.warning));
    }

    info(message) {
        this.setNotification(new Notification(message, NotificationType.info));
    }

}

const mess = new Message();
export const message = () => mess;
