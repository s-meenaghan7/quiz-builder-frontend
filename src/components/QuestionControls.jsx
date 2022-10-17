import React from 'react';
import '../styles/QuestionControls.css';

export default function QuestionControls({ quizData, quizIndex, createNewQuestion }) {

    return (
        <>
            <div className='question-controls'>
                <button type='button' >Previous Question</button>
                <button type='button' onClick={ () => createNewQuestion() }>Save Question</button>
                <button type='button'>Submit Quiz</button>
            </div>

            <div className='question-test-controls'>
                <button type='button' onClick={ () => console.log(quizIndex) }>Quiz Index</button>
                <button type='button' onClick={ () => console.log(quizData) }>Get Quiz Data</button>
            </div>
        </>
    );
}
