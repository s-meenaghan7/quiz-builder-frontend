import React from 'react';
import '../styles/AnswerControls.css';

export default function AnswerControls({ quizIndex, quizDataDispatch }) {
  const addAnswerField = () => {
    quizDataDispatch({ type: "ADD_ANSWER", id: quizIndex });
  }

  const subtractAnswerField = () => {
    quizDataDispatch({ type: "SUBTRACT_ANSWER", id: quizIndex });
  }

  return (
    <>
      <div className='answer-controls'>
        <button type='button' onClick={() => subtractAnswerField()}>-</button>
        <button type='button' onClick={() => addAnswerField()}>+</button>
      </div>
    </>
  );
}
