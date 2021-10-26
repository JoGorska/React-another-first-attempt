import React from "react";



function NewButton(props) {
    return (
        <div>
            {//Button triggering Modal
            }
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add New Task
            </button>

            {// Modal from Bootstrap
            }
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New Task</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    need to add id automaticaly
                    need to add text
                    need to add completed property false
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick={props.addNewTask()} type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>


        // <button onClick={props.addNewTask()} className="btn btn-outline-secondary">Add New Task</button>
    )
}



export default NewButton