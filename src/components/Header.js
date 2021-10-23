import React from "react";

function Header () {
    // check what time of day it is now
    const date = new Date()
    const hours = date.getHours()

    // ES6 syntax else if statement

    let timeOfDay = (hours < 12) ? "morning" :
    (hours >= 12 && hours < 17) ? "afternoon":
    "evening"

    //time of day is added to the JSX that will be rendered in the page

    // inline styling 
    // requires {{}} two sets of curly braces, to get from JSX to Javascript and than curly braces for JavaScript object
    // all dash names of CSS properties need to be changed to camelCase
    // if we specify pixels we can leave px out and just write a number
    // all other properties need to be changed to string to work for example fontSize = "2em"

    // inline style can be put in a variable and inserted into curly braces as well (this way we only end up with one set of curly braces style = {styles})
    // const styles = {
    //     color: "#FF8C00", 
    //     backgroundColor: "#FF2D00",
    //     fontSize: "200px"
    //   }

    // styles is a JavaScript object and properties can be accessed with dot notation styles.color ...

    return (
    <header>
        <h1 style={{color: "green", backgroundColor: "black"}}>These are the tasks that need to be completed this {timeOfDay} </h1>
    </header>
    )
};


export default Header