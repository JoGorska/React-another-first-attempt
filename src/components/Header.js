import React from "react";

function Header () {
    // check what time of day it is now
    const date = new Date()
    const hours = date.getHours()
    
    // ES6 syntax else if statement

    let timeOfDay = (hours < 12) ? "morning" :
    (hours >= 12 && hours < 17) ? "afternoon":
    "night"

    return (
    <header>
        <h1>These are the tasks that need to be completed this {timeOfDay} </h1>
    </header>
    )
};


export default Header