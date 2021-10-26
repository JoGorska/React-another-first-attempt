import React from "react";

function CheckListItem (props) {
    const taskCompletedStyle = {color: "grey", textDecoration: "line-through"}
    return (
        <div className="list-group-item">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id={props.item.id} checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} ></input>
                <label style={props.item.completed ? taskCompletedStyle : null} className="form-check-label" htmlFor={props.item.id}> {props.item.text} </label>
            </div>
        </div>
    )
}

export default CheckListItem