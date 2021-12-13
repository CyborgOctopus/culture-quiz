import './MainDisplay.css';
import { Question } from '../Question/Question';

export const MainDisplay = ({ questionNumber, selectedAnswers, onAnswerSelected }) => {
    return (
        <div className='MainDisplay'>
            {questionNumber >= 0 ? <Question
                questionNumber={questionNumber}
                selectedAnswers={selectedAnswers}
                onAnswerSelected={onAnswerSelected} /> : 'Nothing here yet...'}
        </div>
    );
};
