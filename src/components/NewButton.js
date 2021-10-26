import React from "react";



function NewButton(props) {
    return (
        <button onClick={props.addNewTask()}>Add New Task</button>
    )
}



export default NewButton