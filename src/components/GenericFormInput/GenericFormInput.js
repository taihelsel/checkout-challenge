import React from "react";
import "./GenericFormInput.css";
const GenericFormInput = ({ label, value, onChange, placeholder }) => {
    return (
        <div className="generic-input-wrapper">
            <h3>{label}</h3>
            <input type="text" placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    );
};

export default GenericFormInput;