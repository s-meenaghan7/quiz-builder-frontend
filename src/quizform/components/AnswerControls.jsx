import React, { useEffect } from 'react';
import '../styles/AnswerControls.css';

export default function AnswerControls({ quizIndex, quizDataDispatch, answersCount }) {

  useEffect(() => {
    const minusButton = document.getElementById('subtract_answer');

    if (answersCount <= 2) {
      minusButton.setAttribute('disabled', true);
    } else {
      minusButton.removeAttribute('disabled');
    }
    
  }, [answersCount]);

  const addAnswerField = () => {
    quizDataDispatch({ type: "ADD_ANSWER", id: quizIndex });
  }

  const subtractAnswerField = () => {
    quizDataDispatch({ type: "SUBTRACT_ANSWER", id: quizIndex });
  }

  return (
    <>
      <div className='answer-controls'>
        <button type='button' id='subtract_answer' onClick={() => subtractAnswerField()}>-</button>
        <button type='button' id='add_answer' onClick={() => addAnswerField()}>+</button>
      </div>
    </>
  );
}
