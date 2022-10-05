import React from 'react';
import '../styles/AnswerControls.css';
import Answer from './Answer';

export default function AnswerControls({answers, numberOfAnswers, setNumberOfAnswers}) {

    const addAnswer = () => {
        setNumberOfAnswers(numberOfAnswers + 1);
        answers.push( <Answer /> );
    }

    const subtractAnswer = () => {
        if (numberOfAnswers > 2) {
            setNumberOfAnswers(numberOfAnswers - 1);
            answers.pop();
        }
    }

    return (
        <div className='answer-controls'>
          <button type='button' onClick={ () => subtractAnswer() }>-</button>
          <button type='button' onClick={ () => addAnswer() }>+</button>
        </div>
    );
}
