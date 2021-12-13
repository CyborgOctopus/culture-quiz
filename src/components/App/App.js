import './App.css';
import React, { useState, useEffect } from 'react';
import { MainDisplay } from '../MainDisplay/MainDisplay';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Footer } from '../Footer/Footer';
import { questions } from '../../data/questions';

const App = () => {

    const [ questionNumber, setQuestionNumber ] = useState(-1);
    const [ selectedAnswers, setSelectedAnswers ] = useState(Array(questions.length).fill(-1));

    const decrementQuestionNumber = () => {
        if (0 <= questionNumber) {
            setQuestionNumber(prevQuestionNumber => prevQuestionNumber - 1);
        }
    };

    const incrementQuestionNumber = () => {
        if (questionNumber < questions.length - 1) {
            setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1);
        }
    };

    const onAnswerSelected = answerNumber => {
        const newSelectedAnswers = selectedAnswers.slice();
        newSelectedAnswers[questionNumber] = answerNumber;
        setSelectedAnswers(newSelectedAnswers);
    };

    return (
        <div className='App'>
            <h1 className='pageTitle'>What Kind of Culture Mind Are You?</h1>
            <div className='displayArea'>
                <ProgressBar questionNumber={questionNumber} />
                <MainDisplay
                    questionNumber={questionNumber}
                    selectedAnswers={selectedAnswers}
                    onAnswerSelected={onAnswerSelected}
                />
                <NavigationBar
                    onPrevButtonPress={decrementQuestionNumber}
                    onNextButtonPress={incrementQuestionNumber}
                />
            </div>
            <Footer />
        </div>
  );
}

export default App;
