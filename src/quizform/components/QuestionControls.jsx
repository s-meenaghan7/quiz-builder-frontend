import React, { useEffect } from 'react';
import '../styles/QuestionControls.css';

export default function QuestionControls({ quizData, quizIndex, setQuizIndex, formIsValid, saveQuestion }) {

  useEffect(() => { // Determine if Next and Previous question buttons are disabled/enabled.
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    if (quizIndex === 0) {
      prev.setAttribute('disabled', true);
    } else {
      prev.removeAttribute('disabled');
    }

    if (quizData.length === quizIndex) {
      next.setAttribute('disabled', true);
    } else {
      next.removeAttribute('disabled');
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
    <>
      <div className='question-controls'>
        <button type='button' id='prev' onClick={() => previousQuestionBtnHandler()}>
          Previous Question
        </button>

        <button type='button' id='save' onClick={() => saveQuestionBtnHandler()}>
          Save Question
        </button>

        <button type='button' id='next' onClick={() => nextQuestionBtnHandler()}>
          {(quizIndex === quizData.length) ? 'New' : 'Next'} Question
        </button>
      </div>
    </>
  );
}
