import React from "react";

function CheckListItem (props) {
    return (
        <div className="list-group-item">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id={props.item.id} defaultChecked={props.item.completed} onChange={() => console.log("I was clicked")} ></input>
                <label className="form-check-label" htmlFor={props.item.id}> {props.item.text} </label>
            </div>
        </div>
    )
}

export default CheckListItem