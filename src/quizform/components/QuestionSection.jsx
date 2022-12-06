import React from 'react';
import '../styles/QuestionSection.css';

export default function QuestionSection({ currentQuestion, setCurrentQuestion }) {

  const questionChanged = (e) => {
    const currentQuestionUpdated = {
      ...currentQuestion,
      question: e.target.value
    };

    setCurrentQuestion(currentQuestionUpdated);
  }

  return (
    <div className='question-section'>
      <h3>Question: {currentQuestion.id}</h3>

      <label>
        <input
          name='questionField'
          id='questionField'
          type='text'
          placeholder={`Question ${currentQuestion.id}`}
          defaultValue={currentQuestion.question}
          onChange={(e) => questionChanged(e)}
          required
        />
      </label>
    </div>
  );
}
