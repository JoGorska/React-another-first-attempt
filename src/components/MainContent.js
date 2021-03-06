import React from "react"
import CheckListItem from "./CheckListItem"
import NewButton from "./NewButton"

import toDoList from "../toDoList.js"



class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: toDoList,

        }
        // bind is needed for any method that sets the state
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

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
            // console.log(prevState.todos)
            // console.log(updatedTodos)

            return {
                todos: updatedTodos
            }
        })
    }

    onSubmit(event) {
        
        

        console.log(`event target text value ${event.target.text.value}`)

        //returning an object that can be added to the tasks list, 
        const objectNewTask = {

            //need to generate unique ID every time a new task is added
            // id returns number of miliseconds since 1 Jannuary 1970
            id: Date.now(),
            text: event.target.text.value,
            completed: false

        }

        // add new task to the state, need to update todo list...

        this.setState(prevState => {
                 
            const todosPlusOne = [...prevState.todos, objectNewTask]

            console.log (todosPlusOne)

            return {
                todos: todosPlusOne
            }
        })

        // this stops the modal from closing. once removed, the tasks apears and disapears
        event.preventDefault()


    }

    // add handle change method to be passed to the component

    render() {
        const itemComponentsList = this.state.todos.map(item => <CheckListItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <div className="card-body">
                <ul className="list-group list-group-flush mt-4 mb-4">
                    {itemComponentsList}

                </ul>
                <NewButton onSubmit={this.onSubmit}/>
            </div>
        );
    };
};

export default MainContent