//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 0;

function secsCounter() {

    let first = Math.floor(counter) % 10;
    let second = Math.floor(counter / 10) % 10;
    let third = Math.floor(counter / 100) % 10;
    let fourth = Math.floor(counter / 1000) % 10;
    let fifth = Math.floor(counter / 10000) % 10;
    let sixth = Math.floor(counter / 100000) % 10;

    ReactDOM.render(<Home 
        firstDigit={first} 
        secondDigit={second}
        thirdDigit={third}
        fourthDigit={fourth}
        fifthDigit={fifth}
        sixthDigit={sixth}
        />, document.querySelector("#app"));
    counter++;
} 

setInterval(secsCounter, 1000)