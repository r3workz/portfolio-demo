import React from "react";
import "./InputField.css";

const InputField = (props) => (
    <div className="input-container">
        <label for={props.id}>{props.label}</label>
        {props.id === "message" ? (
            <textarea id={props.id} name={props.id} rows="10"></textarea>
        ) : (
            <input
                type={props.type}
                id={props.id}
                name={props.id}
                placeholder={props.placeholder}
                required
            />
        )}
    </div>
);
export default InputField;
