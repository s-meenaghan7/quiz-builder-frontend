import React, { useEffect } from 'react';
import '../styles/QuestionControls.css';

export default function QuestionControls({ quizData, quizIndex, setQuizIndex, createNewQuestion }) {

  useEffect(() => { // Based on quizIndex, determine if Previous Question and Next Question buttons are disabled/enabled.
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    if (quizIndex === 0) {
      prev.setAttribute('disabled', true);
    } else {
      prev.removeAttribute('disabled');
    }

    if (quizIndex === (quizData.length - 1)) {
      next.setAttribute('disabled', true);
    } else {
      next.removeAttribute('disabled');
    }

  }, [quizIndex, quizData.length]);

  const previousQuestionHandler = () => {
    if (quizIndex > 0) setQuizIndex(quizIndex => quizIndex - 1);
  }

  const nextQuestionHandler = () => {
    if (quizIndex !== quizData.length - 1) setQuizIndex(quizIndex => quizIndex + 1);
  }

  return (
    <>
      <div className='question-controls'>
        <button type='button' id='prev' onClick={() => previousQuestionHandler()}>Previous Question</button>
        <button type='button' onClick={() => createNewQuestion()}>Save Question</button>
        <button type='button' id='next' onClick={() => nextQuestionHandler()}>Next Question</button>
      </div>

      <div className='question-test-controls' >
        <button type='button' onClick={() => console.log(quizIndex)}>Quiz Index</button>
        <button type='button' onClick={() => console.log(quizData)}>Get Quiz Data</button>
      </div>
    </>
  );
}
