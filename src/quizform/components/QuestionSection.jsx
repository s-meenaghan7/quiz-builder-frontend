import React from 'react';
import '../styles/QuestionSection.css';

export default function QuestionSection({ currentQuestion, savedQuestions }) {

  return (
    <div id='question-section'>
      <div id='quiz_info_container'>
        <p id='question_header'>Question: {currentQuestion.id}</p>
        <p id='saved_questions'>Saved questions: {savedQuestions}</p>
      </div>

      <label>
        <input
          name='question'
          id='questionField'
          type='text'
          className='quizform_input'
          placeholder={`Question ${currentQuestion.id}`}
          defaultValue={currentQuestion.question}
          required
        />
      </label>

    </div>
  );
}
