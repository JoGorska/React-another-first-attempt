import React from "react";

function CheckListItem (props) {
    return (
        <div className="form-check">
        <input className="form-check-input" type="checkbox" id={props.taskId}></input>
        <label className="form-check-label" for={props.taskId}> {props.task} </label>
        </div>
    )
}

export default CheckListItem