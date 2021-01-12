import {tabsEnum} from "../../component/navigation";

export const localAuthNameKey = "local-name";
export const authRoutePath = "/auth";

export const signIn = (name) => {
    window.localStorage.setItem(localAuthNameKey, name);
    window.location.href = tabsEnum.MERCENARIES.path;
}

export const signOut = () => {
    window.localStorage.removeItem(localAuthNameKey);
    window.location.href = authRoutePath
}

export const getFixerNameConnected = () => {
    return window.localStorage.getItem(localAuthNameKey);
}

export const isAlreadyRegistered = () => {
    const fixerName = getFixerNameConnected();
    return !!fixerName;
}

export const redirectToAuthPageIfNotConnected = () => {
    if (!isAlreadyRegistered()) {
        window.location.href = authRoutePath;
    }
}
