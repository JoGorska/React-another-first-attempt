import React from "react"
import CheckListItem from "./CheckListItem"

import toDoList from "../toDoList.js"

function MainContent () {

    // make a list using map method that would generate as many components as there is items in the list. We need to pass item to the CheckListItem component and key
    
    const itemComponentsList = toDoList.map(item => <CheckListItem key={item.id} item={item} />)
    
    return (
        <div className="card-body">
            <ul className="list-group list-group-flush mt-4 mb-4">
                {itemComponentsList}

                {/* 
                first version (below) - each item had data input manualy, second version (above) takes data from toDoList.js

                <CheckListItem taskId = "task01" task = "Get the rubish out"/>
                <CheckListItem taskId = "task02" task = "Empty the dishwasher"/>
                <CheckListItem taskId = "task03" task = "Clean kitchen tops"/> */}
            </ul>
        </div>
    );
};

export default MainContent