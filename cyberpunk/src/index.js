import React from 'react';
import ReactDOM from 'react-dom';
import Merc from './page/merc';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Weapon from "./page/weapon/";
import Job from "./page/job/";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/job" component={Job}/>
                <Route path="/weapon" component={Weapon}/>
                <Route path="/" component={Merc}/>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
