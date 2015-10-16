import React from 'react';
import ReactDOM from 'react-dom';
import Voting from "./components/Voting";
import Router , {Route} from 'react-route';
import App from './components/App';

const pair = [ "Trainspotting", "28 Days Later"];
require('./style.css');

const routes = <Route componetn={App}>
    <Route path="/" component={Voting}/>
</Route>;
ReactDOM.render(
    <Router> {routes} </Router>,
    document.getElementById("app")
);