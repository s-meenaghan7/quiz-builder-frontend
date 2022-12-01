import React, { useEffect } from 'react';
import '../styles/QuestionControls.css';

export default function QuestionControls({ quizData, quizIndex, setQuizIndex, formIsValid, saveQuestion }) {

  useEffect(() => { // Based on quizIndex, determine if Previous Question is disabled.
    const prev = document.getElementById('prev');

    if (quizIndex === 0) {
      prev.setAttribute('disabled', true);
    } else {
      prev.removeAttribute('disabled');
    }

  }, [quizIndex]);

  const previousQuestionHandler = () => {
    // check if form is valid. Return if not, else continue
    if (!formIsValid()) return;

    // save currentQuestion to quizData[quizIndex]
    saveQuestion();

    // navigate by decrementing quizIndex
    setQuizIndex(quizIndex => quizIndex - 1);
  }

  const nextQuestionHandler = () => {
    // check if form is valid. Return if not, else continue
    if (!formIsValid()) return;
    
    // save currentQuestion to quizData[quizIndex]
    saveQuestion();

    // navigate by incrementing quizIndex
    setQuizIndex(quizIndex => quizIndex + 1);
  }

  return (
    <>
      <div className='question-controls'>
        <button type='button' id='prev' onClick={() => previousQuestionHandler()}>
          Previous Question
        </button>

        <button type='button' id='next' onClick={() => nextQuestionHandler()}>
          Next Question
        </button>
      </div>
    </>
  );
}
