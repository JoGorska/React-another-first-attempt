import React from "react"
import CheckListItem from "./CheckListItem"

import toDoList from "../toDoList.js"



class MainContent extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: toDoList
        }
    }


    
    render() {
        const itemComponentsList = this.state.todos.map(item => <CheckListItem key={item.id} item={item} />)
        return (
            <div className="card-body">
                <ul className="list-group list-group-flush mt-4 mb-4">
                    {itemComponentsList}


                </ul>
            </div>
        );
    };
};

export default MainContent