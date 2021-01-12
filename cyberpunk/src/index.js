import React from 'react';
import ReactDOM from 'react-dom';
import Merc from './page/merc';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Weapon from "./page/weapon/";
import Job from "./page/job/";
import axios from "axios";
import Navigation, {tabsEnum} from "./component/navigation";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

const initAxios = () => {
    axios.defaults.baseURL = "http://localhost:8081"
}

initAxios()

ReactDOM.render(
    <main className="main-content h-screen overflow-y-auto">
        <React.StrictMode>
            <Router>
                <Navigation/>
                <section className="mt-20">
                    <Switch>
                        <Route path={tabsEnum.JOBS.path} component={Job}/>
                        <Route path={tabsEnum.WEAPONS.path} component={Weapon}/>
                        <Route path={tabsEnum.MERCENARIES.path} component={Merc}/>
                        <Route path="*">
                            <Redirect to={tabsEnum.MERCENARIES.path}/>
                        </Route>
                    </Switch>
                </section>
            </Router>
        </React.StrictMode>
    </main>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


