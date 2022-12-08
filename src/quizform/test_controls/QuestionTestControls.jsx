import React, { useEffect } from 'react';
import './QuestionTestControls.css';

export default function QuestionTestControls({ hidden, quizIndex, quizData, currentQuestion }) {

  useEffect(() => {
    const testControls = document.querySelectorAll('.test_control');

    if (hidden) {
      testControls.forEach(element => element.classList.add('hidden'));
    } else {
      testControls.forEach(element => element.classList.remove('hidden'));
    }
  }, [hidden]);

  return (
    <div className='question-test-controls'>
        <button className='test_control' type='button' onClick={() => console.log(quizIndex)}>Quiz Index</button>
        <button className='test_control' type='button' onClick={() => console.log(quizData)}>Quiz Data</button>
        {/* <button className='test_control' type='button' onClick={() => console.log(currentQuestion)}>Current Question</button> */}
      </div>
  );
}