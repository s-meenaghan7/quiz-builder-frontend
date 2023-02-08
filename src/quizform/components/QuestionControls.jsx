import React, { useEffect } from 'react';
import '../styles/QuestionControls.css';

export default function QuestionControls({ quizData, quizIndex, setQuizIndex, formIsValid, saveQuestion }) {

  useEffect(() => { // Determine if Next and Previous question buttons are disabled/enabled.
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    if (quizIndex === 0) {
      prevBtn.setAttribute('disabled', true);
    } else {
      prevBtn.removeAttribute('disabled');
    }

    if (quizIndex === (quizData.length - 1)) {
      nextBtn.setAttribute('disabled', true);
    } else {
      nextBtn.removeAttribute('disabled');
    }
  }, [quizIndex, quizData.length]);

  const previousQuestionBtnHandler = () => {
    setQuizIndex(quizIndex => quizIndex - 1);
  }

  const nextQuestionBtnHandler = () => {
    setQuizIndex(quizIndex => quizIndex + 1);
  }

  const saveQuestionBtnHandler = () => {
    if (!formIsValid()) return;
    saveQuestion();
  }

  return (
    <div className='question_controls'>
      <button
        type='button'
        className='qc-button'
        id='prev'
        onClick={() => previousQuestionBtnHandler()}
      >
        Previous Question
      </button>

      <button
        type='button'
        className='qc-button'
        id='save'
        onClick={() => saveQuestionBtnHandler()}
      >
        Save Question
      </button>

      <button
        type='button'
        className='qc-button'
        id='next'
        onClick={() => nextQuestionBtnHandler()}
      >
        {(quizIndex >= (quizData.length - 2)) ? 'New' : 'Next'} Question
      </button>
    </div>
  );
}
