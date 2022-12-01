import React from 'react';
import Answer from './Answer';
import '../styles/AnswerSection.css';

export default function AnswerSection({ currentQuestion, setCurrentQuestion }) {

  const correctAnswerChanged = () => {
    const radios = document.querySelectorAll('input[name=isCorrect]');

    const newOptions = [...currentQuestion.options].map((option, i) => {
      return { ...option, isCorrect: radios[i].checked };
    });

    const currentQuestionUpdated = {
      ...currentQuestion,
      options: newOptions
    };

    setCurrentQuestion(currentQuestionUpdated);
  }

  const answerTextChanged = (e, id) => {
    const newOptions = [...currentQuestion.options];
    newOptions[id - 1].answer = e.target.value;

    const currentQuestionUpdated = {
      ...currentQuestion,
      options: newOptions
    };

    setCurrentQuestion(currentQuestionUpdated);
  }

  return (
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
            currentQuestion.options.map((a) =>
              <Answer
                key={a.id}
                answerData={a}
                answerTextChanged={answerTextChanged}
                correctAnswerChanged={correctAnswerChanged}
              />
            )
          }
        </tbody>
      </table>
    </div>
  );
}
