import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css'

import { authRoutePath, isAlreadyRegistered, redirectTo } from "./service/local-auth";
import Merc from './page/merc';
import Weapon from "./page/weapon/";
import Job from "./page/job/";
import LocalAuth from "./page/local-auth";
import Navigation, {tabsEnum} from "./component/Navigation";
import Footer from "./component/Footer";
import Notifications from "./component/Notifications";

import './index.css';

const initAxios = () => {
    axios.defaults.baseURL = "http://localhost:8081"
}

initAxios()

ReactDOM.render(
    <main className="main-content h-screen overflow-y-auto">
        <React.StrictMode>
            <Router basename="/">
                <Navigation/>
                <Notifications/>
                <section className="mt-20">
                    <Switch>
                        <Route path={tabsEnum.JOBS.path} component={redirectTo(Job)}/>
                        <Route path={tabsEnum.WEAPONS.path} component={redirectTo(Weapon)}/>
                        <Route path={tabsEnum.MERCENARIES.path} component={redirectTo(Merc)}/>
                        <Route path={authRoutePath} component={LocalAuth}/>
                        <Route path="*">
                            <Redirect to={isAlreadyRegistered() ? tabsEnum.MERCENARIES : authRoutePath}/>
                        </Route>
                    </Switch>
                </section>
                <Footer/>
            </Router>
        </React.StrictMode>
    </main>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


