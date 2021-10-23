import React from "react";

function CheckListItem (props) {
    return (
        <div>
        <input type="checkbox"></input>
        <label> {props.task} </label>
        </div>
    )
}

export default CheckListItem