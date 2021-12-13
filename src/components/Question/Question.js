import './Question.css';
import {AnswerChoice} from "../AnswerChoice/AnswerChoice";

export const Question = () => {
    return (
        <div className='Question' align='center'>
            <p className='questionTitle'>What is the best programming language?</p>
            <AnswerChoice text={'Python'} status={'selected'} />
            <AnswerChoice text={'JavaScript'} status={'hover'} />
            <AnswerChoice text={'C++'} status={'default'} />
        </div>
    );
};
