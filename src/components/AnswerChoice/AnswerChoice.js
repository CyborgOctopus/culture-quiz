import React, { useState, useEffect } from 'react';
import './AnswerChoice.css';

export const AnswerChoice = ({ text, isSelectedAnswer, onSelected, onDeselected }) => {

    const [ status, setStatus ] = useState(isSelectedAnswer ? 'selected' : 'default');
    const [ deselected, setDeselected ] = useState(false);

    useEffect(() => setStatus(isSelectedAnswer ? 'selected' : 'default'), [isSelectedAnswer]);

    useEffect(() => {
        if (deselected) {
            setStatus('hover');
        }
        setDeselected(false);
    }, [deselected]);

    const setStatusToDefault = e => {
        e.preventDefault();
        setStatus('default');
    };

    const setStatusToHover = e => {
        e.preventDefault();
        setStatus('hover');
    };

    const select = e => {
        e.preventDefault();
        onSelected();
    };

    const deselect = e => {
        e.preventDefault();
        onDeselected();
        setDeselected(true);
    };

    return (
        <div className='AnswerChoice'
             onMouseEnter={isSelectedAnswer ? null : setStatusToHover}
             onMouseLeave={isSelectedAnswer ? null :setStatusToDefault}
             onClick={isSelectedAnswer ? deselect : select}
        >
            <div className={status}>
                {text}
            </div>
        </div>
    );
};
