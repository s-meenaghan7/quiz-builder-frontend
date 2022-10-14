import React from 'react';
import { flushSync } from 'react-dom';
import '../styles/QuestionControls.css';

export default function QuestionControls({ quizData, quizIndex }) {

    

    return (
        <>
            <div className='question-controls'>
                <button type='button' >Previous Question</button>
                <button type='button' >New Question</button>
                <button type='button'>Submit Quiz</button>
            </div>

            <div className='question-test-controls'>
                <button type='button' onClick={ () => console.log(quizIndex) }>Quiz Index</button>
                <button type='button' onClick={ () => console.log(quizData) }>Get Quiz Data</button>
            </div>
        </>
    );
}
