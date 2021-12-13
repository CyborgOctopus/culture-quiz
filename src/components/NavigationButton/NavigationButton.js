import React, { useState } from 'react';
import './NavigationButton.css';

export const NavigationButton = ({ text, onButtonPress }) => {

    const [ status, setStatus ] = useState('default');

    const setStatusToDefault = e => {
        e.preventDefault();
        setStatus('default');
    };

    const setStatusToHover = e => {
        e.preventDefault();
        setStatus('hover')
    };

    const setStatusToSelected = e => {
        e.preventDefault();
        setStatus('selected');
    };

    const handleMouseClick = e => {
        e.preventDefault();
        onButtonPress();
    };

    return (
        <div className='NavigationButton'
             onMouseEnter={setStatusToHover}
             onMouseLeave={setStatusToDefault}
             onMouseDown={setStatusToSelected}
             onMouseUp={setStatusToHover}
             onClick={handleMouseClick}
        >
            <div className={'button-' + status}>
                {text}
            </div>
        </div>
    );
};
