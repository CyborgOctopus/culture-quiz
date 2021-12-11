import './Question.css';

export const Question = () => {
    return (
        <div className='Question' align='center'>
            <form>
                <p>What is the best programming language?</p>
                <div className='radioLeft'>
                    <input type='radio' id='answerChoice1' name='answer' value='Python' />
                    <label for='answerChoice1'>Python</label><br/>

                    <input type='radio' id='answerChoice2' name='answer' value='JavaScript' />
                    <label for='answerChoice2'>JavaScript</label><br/>

                    <input type='radio' id='answerChoice3' name='answer' value='C++' />
                    <label for='answerChoice3'>C++</label><br/>
                </div>
            </form>
        </div>
    );
};
