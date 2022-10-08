import React from 'react';
import '../styles/AnswerControls.css';

export default function AnswerControls({answers, numberOfAnswers, setNumberOfAnswers}) {

    const addAnswer = () => {
        setNumberOfAnswers(numberOfAnswers + 1);
        answers.push( {} );
    }

    const subtractAnswer = () => {
        if (numberOfAnswers > 2) {
            setNumberOfAnswers(numberOfAnswers - 1);
            answers.pop();
        }
    }

    return (
        <>
            <div className='answer-controls'>
                <button type='button' onClick={ () => subtractAnswer() }>-</button>
                <button type='button' onClick={ () => addAnswer() }>+</button>
            </div>

            <div className='test-controls'>
                <button type='button' onClick={ () => console.log(answers.length) }>Number of Answers</button>
                <button type='button' onClick={ () => console.log(answers) }>Answers Data</button>
            </div>
        </>
    );
}
