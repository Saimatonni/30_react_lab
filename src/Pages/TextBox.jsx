import React, { useState } from 'react';
import '../styles/button.css';
import TextBoxList from '../components/TextBoxList';
import Total from '../components/Total';
import TextBox from '../components/TextBox';
import AddButton from '../components/AddButton';
const AddTextBox = () => {
    const [textboxes, setTextboxes] = useState([{ id: 1, value: '', errorMessage: '' }]);

    const handleAddTextBox = () => {
        const newTextBoxes = [...textboxes, { id: textboxes.length + 1, value: '', errorMessage: '' }];
        setTextboxes(newTextBoxes);
    };

    const handleDeleteTextBox = (id) => {
        const updatedTextBoxes = textboxes.filter(textbox => textbox.id !== id);
        setTextboxes(updatedTextBoxes);
    };

    const handleChange = (id, value) => {
        const updatedTextBoxes = textboxes.map(textbox => {
            if (textbox.id === id) {
                const errorMessage = isNaN(value) ? 'Please enter a valid number.' : '';
                return { ...textbox, value, errorMessage };
            }
            return textbox;
        });
        setTextboxes(updatedTextBoxes);
    };

    const calculateSum = () => {
        let sum = 0;
        textboxes.forEach(textbox => {
            const num = parseFloat(textbox.value);
            if (!isNaN(num)) {
                sum += num;
            }
        });
        return sum;
    };

    return (
        <div className="add-textbox-container">
            <TextBoxList
                textboxes={textboxes}
                handleChange={handleChange}
                handleDelete={handleDeleteTextBox}
            />
            <div className="actions">
                <AddButton onClick={handleAddTextBox} />
                <Total total={calculateSum()} />
            </div>
        </div>
    );
};

export default AddTextBox;





