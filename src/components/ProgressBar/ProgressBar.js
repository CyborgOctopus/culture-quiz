import './ProgressBar.css';
import { questions } from '../../data/questions';

export const ProgressBar = ({ questionNumber }) => {
    const progressPercentage = (questionNumber + 1) / questions.length * 100;
    document.querySelector(':root').style.setProperty('--progress-bar-level', progressPercentage + '%');

    return (
        <div className='ProgressBar'>
            <div className='rect' />
            <p>Question {questionNumber + 1} of {questions.length}</p>
        </div>
    );
};
