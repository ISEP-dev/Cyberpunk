import React from 'react';
import ReactDOM from 'react-dom';
import Merc from './page/merc';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Weapon from "./page/weapon/";
import Job from "./page/job/";
import axios from "axios";
import Navigation, {tabsEnum} from "./component/navigation";

const initAxios = () => {
    axios.defaults.baseURL = "http://localhost:8081"
}

initAxios()

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Navigation/>
            <Switch>
                <Route path={tabsEnum.JOBS} component={Job}/>
                <Route path={tabsEnum.WEAPONS} component={Weapon}/>
                <Route path={tabsEnum.MERCENARIES} component={Merc}/>
                <Route exact path="/">
                    <Redirect to={tabsEnum.MERCENARIES}/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


