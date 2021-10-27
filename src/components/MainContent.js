import React from "react"
import CheckListItem from "./CheckListItem"
import NewButton from "./NewButton"

import toDoList from "../toDoList.js"



class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: toDoList
        }
        // bind is needed for any method that sets the state
        this.handleChange = this.handleChange.bind(this)
        this.addNewTask = this.addNewTask.bind(this)
    }

    // method that will set the state 

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })

            // thses consolo log are the prof that the previous state was not modified, we added new state.
            console.log(prevState.todos)
            console.log(updatedTodos)

            return {
                todos: updatedTodos
            }
        })
    }
    addNewTask () {
        console.log("added")
    }

    // add handle change method to be passed to the component

    render() {
        const itemComponentsList = this.state.todos.map(item => <CheckListItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <div className="card-body">
                <ul className="list-group list-group-flush mt-4 mb-4">
                    {itemComponentsList}

                </ul>
                <NewButton addNewTask={this.addNewTask}/>
            </div>
        );
    };
};

export default MainContent