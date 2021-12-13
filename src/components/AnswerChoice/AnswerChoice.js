import './AnswerChoice.css';

export const AnswerChoice = ({ text, status }) => {
    return (
        <div className='AnswerChoice'>
            <div className={status}>
                {text}
            </div>
        </div>
    );
};
