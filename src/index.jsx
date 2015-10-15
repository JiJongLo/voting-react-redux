import React from 'react';
import Voting from "./components/Voting";

const pair = [ "Trainspotting", "28 Days Later"];
require('./style.css');
React.render(
    <Voting pair = {pair} winner = "Trainspotting"/>,
    document.getElementById("app")
);