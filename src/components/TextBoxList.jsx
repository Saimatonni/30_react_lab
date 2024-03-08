
import React from 'react';
import TextBox from './TextBox';

const TextBoxList = ({ textboxes, handleChange, handleDelete }) => {
    return (
        <div className="textboxes">
            {textboxes.map(textbox => (
                <TextBox
                    key={textbox.id}
                    id={textbox.id}
                    value={textbox.value}
                    onChange={handleChange}
                    onDelete={handleDelete}
                    errorMessage={textbox.errorMessage}
                />
            ))}
        </div>
    );
};

export default TextBoxList;
