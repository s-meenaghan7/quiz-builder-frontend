import React, { useEffect, useState } from 'react';
import Answer from './Answer';
import '../styles/AnswerSection.css';

export default function AnswerSection({ currentQuestion }) {
  let [answers, setAnswers] = useState(currentQuestion.options);

  useEffect(() => {
    const minusButton = document.getElementById('subtract_answer');

    if (answers.length <= 2) {
      minusButton.setAttribute('disabled', true);
    } else {
      minusButton.removeAttribute('disabled');
    }
    
  }, [answers.length]);

  const addAnswerField = () => {
    setAnswers(answers => [ ...answers, { id: answers.length + 1, answer: "", isCorrect: false } ]);
  }

  const subtractAnswerField = () => {
    setAnswers(answers => answers.slice(0, answers.length - 1));
  }

  return (
    <>
      <div className='answer-controls'>
        <button type='button' id='subtract_answer' onClick={() => subtractAnswerField()}>-</button>
        <button type='button' id='add_answer' onClick={() => addAnswerField()}>+</button>
      </div>

      <div className='answer-section'>
        <table id='answer-table' width='100%'>
          <thead>
            <tr>
              <th>Answer ID</th>
              <th>Answer</th>
              <th>Is Correct?</th>
            </tr>
          </thead>

          <tbody>
            {
              answers.map((a, i) =>
                <Answer
                  key={a.id}
                  answerData={{...a, id: i + 1}}
                />
              )
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
