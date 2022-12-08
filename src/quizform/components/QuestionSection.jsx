import React from 'react';
import '../styles/QuestionSection.css';

export default function QuestionSection({ currentQuestion }) {

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
          required
        />
      </label>
    </div>
  );
}
