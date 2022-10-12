import React from 'react';
import '../styles/QuestionControls.css';

export default function QuestionControls({ createNewQuestion, quizData }) {
    return (
        <>
            <div className='question-controls'>
                <button type='button'>Previous Question</button>
                <button type='button' onClick={ () => createNewQuestion() }>New Question</button>
                <button type='button'>Submit Quiz</button>
            </div>

            <div className='question-test-controls'>
                <button type='button' onClick={ () => console.log(quizData) }>Get Quiz Data</button>
            </div>
        </>
    );
}
