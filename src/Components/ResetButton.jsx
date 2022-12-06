import React from 'react';

import './ResetButton.css';

const ResetButton = ({ onReset }) => {
    return (

        <button className="resetButton" onClick={onReset}>Reset</button>

    )
}

export default ResetButton;
