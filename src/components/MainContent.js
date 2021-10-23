import React from "react"
import CheckListItem from "./CheckListItem"

function MainContent () {
    return (
        <ul>
            <CheckListItem task = "Get the rubish out"/>
            <CheckListItem task = "Empty the dishwasher"/>
            <CheckListItem task = "Clean kitchen tops"/>
        </ul>
    );
};

export default MainContent