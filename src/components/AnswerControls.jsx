import React from 'react';
import '../styles/AnswerControls.css';

export default function AnswerControls({answers, quizData}) {

    

    return (
        <>
            <div className='answer-controls'>
                <button type='button' >-</button>
                <button type='button' >+</button>
            </div>

            <div className='test-controls'>
                <button type='button' onClick={ () => console.log(answers.length) }>Number of Answers</button>
                <button type='button' onClick={ () => console.log(answers) }>Answers Data</button>
            </div>
        </>
    );
}
