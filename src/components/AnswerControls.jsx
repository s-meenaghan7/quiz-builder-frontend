import React from 'react';
import '../styles/AnswerControls.css';

export default function AnswerControls({answers, setAnswers, quizData}) {

    const addAnswerField = () => {
        setAnswers(answers => [...answers, {id: answers.length + 1, answer: "", isCorrect: false}]);
    }

    const subtractAnswerField = () => {
        if (answers.length > 2) {
            setAnswers(answers => answers.slice(0, answers.length - 1));
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
