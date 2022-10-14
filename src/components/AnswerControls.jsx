import React from 'react';
import '../styles/AnswerControls.css';

export default function AnswerControls({answers, numberOfAnswers, setNumberOfAnswers}) {

    const addAnswerField = () => {
        setNumberOfAnswers(numberOfAnswers + 1);
        answers.push( {} );
    }

    const subtractAnswerField = () => {
        if (numberOfAnswers > 2) {
            setNumberOfAnswers(numberOfAnswers - 1);
            answers.pop();
        }
    }

    return (
        <>
            <div className='answer-controls'>
                <button type='button' onClick={ () => subtractAnswerField() }>-</button>
                <button type='button' onClick={ () => addAnswerField() }>+</button>
            </div>

            <div className='test-controls'>
                <button type='button' onClick={ () => console.log(answers.length) }>Number of Answers</button>
                <button type='button' onClick={ () => console.log(answers) }>Answers Data</button>
            </div>
        </>
    );
}
