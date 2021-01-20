export const NotificationType = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info"
}

class Notification {
    constructor(text, type, timeout = 5000) {
        this.text = text;
        this.type = type;
        this.timeout = timeout;
    }

}

export default Notification;
