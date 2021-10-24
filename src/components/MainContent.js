import React from "react"
import CheckListItem from "./CheckListItem"

function MainContent () {
    return (
        <div className="card-body">
            <ul className="list-group list-group-flush">
                <CheckListItem taskId = "task01" task = "Get the rubish out"/>
                <CheckListItem taskId = "task02" task = "Empty the dishwasher"/>
                <CheckListItem taskId = "task03" task = "Clean kitchen tops"/>
            </ul>
        </div>
    );
};

export default MainContent