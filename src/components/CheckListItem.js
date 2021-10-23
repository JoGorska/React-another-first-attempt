import React from "react";

function CheckListItem (props) {
    return (
        <div className="form-check">
        <input className="form-check-input" type="checkbox" id="task"></input>
        <label className="form-check-label" for="task"> {props.task} </label>
        </div>
    )
}

export default CheckListItem