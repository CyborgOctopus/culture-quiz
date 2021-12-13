import './Question.css';
import { AnswerChoice } from '../AnswerChoice/AnswerChoice';
import { questions } from '../../data/questions';

export const Question = ({ questionNumber, selectedAnswers, onAnswerSelected }) => {

    return (
        <div className='Question' align='center'>
            <p className='questionTitle'>{questions[questionNumber].prompt}</p>
            {questions[questionNumber].answerChoices.map((answerChoice, i) => <AnswerChoice
                    text={answerChoice}
                    isSelectedAnswer={i === selectedAnswers[questionNumber]}
                    onSelected={() => onAnswerSelected(i)}
                    onDeselected={() => onAnswerSelected(-1)}
            />)}
        </div>
    );
};
