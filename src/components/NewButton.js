import React from "react";
// import FormNewTask from "./FormNewTask"



function NewButton(props) {
    return (
        <div>
            {/* Button triggering Modal */}
            
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add New Task
            </button>

            {/* Modal from Bootstrap */}
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    {/* Form starts here */}
                    <form onSubmit={props.onSubmit}>
                        <div className="modal-body">

                            <div className="mb-3">
                                <label className="form-label" htmlFor="text">Write the task here</label>
                                <input 
                                    name="text" 
                                    // Do I need to handle on change at all at this stage???
                                    // value={this.state.text} 
                                    // onChange={props.handleChangeForm} 
                                    className="form-control"
                                    id="text"
                                />

                            </div>
                        
                        </div>

                        {/* Buttons */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button  type="submit" className="btn btn-primary">Save New Task</button>
                        </div>
                    </form>
                    {/* Form ends here */}
                    </div>
                </div>
            </div>
        </div>

    )
}



export default NewButton