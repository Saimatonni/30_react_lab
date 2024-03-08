import React from 'react';

const AddButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="add-button">Add TextBox</button>
    );
};

export default AddButton;