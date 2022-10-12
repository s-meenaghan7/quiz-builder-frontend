import React from 'react';
import '../styles/QuestionSection.css';

export default function QuestionSection({ questionNumber }) {
    return (
        <div className='question-section'>
          <h3>Question: {questionNumber}</h3>

          <label>
            <input name='questionField' id='questionField' type='text' required/>
          </label>
        </div>
    );
}
