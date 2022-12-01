import React, { useEffect } from 'react';
import '../styles/AnswerControls.css';

export default function AnswerControls({ currentQuestion, setCurrentQuestion }) {

  useEffect(() => {
    const minusButton = document.getElementById('subtract_answer');

    if (currentQuestion.options.length <= 2) {
      minusButton.setAttribute('disabled', true);
    } else {
      minusButton.removeAttribute('disabled');
    }
    
  }, [currentQuestion.options.length]);

  const addAnswerField = () => {
    setCurrentQuestion((currentQuestion) => {
      return { ...currentQuestion, options: [...currentQuestion.options, { id: currentQuestion.options.length + 1, answer: "", isCorrect: false }] };
    });
  }

  const subtractAnswerField = () => {
    setCurrentQuestion((currentQuestion) => {
      return { ...currentQuestion, options: currentQuestion.options.slice(0, currentQuestion.options.length - 1) };
    });
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
