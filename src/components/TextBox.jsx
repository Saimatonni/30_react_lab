
import React from 'react';

const TextBox = ({ id, value, onChange, onDelete, errorMessage }) => {
    return (
        <div className="textbox-container">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
                className="textbox"
                placeholder="Enter a number"
            />
            <div className="error-message">{errorMessage}</div>
            <button onClick={() => onDelete(id)} className="delete-button">X</button>
        </div>
    );
};

export default TextBox;
