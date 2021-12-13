import React, { useState, useEffect } from 'react';
import './AnswerChoice.css';

export const AnswerChoice = ({ text, i, questionNumber, selectedAnswer, onSelected, onDeselected }) => {

    const [ status, setStatus ] = useState(i === selectedAnswer ? 'selected' : 'default');
    const [ deselected, setDeselected ] = useState(false);

    useEffect(() => setStatus(i === selectedAnswer ? 'selected' : 'default'),
        [questionNumber, selectedAnswer]);

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
             onMouseEnter={status === 'selected' ? null : setStatusToHover}
             onMouseLeave={status === 'selected' ? null :setStatusToDefault}
             onClick={status === 'selected' ? deselect : select}
        >
            <div className={status}>
                {text}
            </div>
        </div>
    );
};
