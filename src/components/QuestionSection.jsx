import React from 'react';
import '../styles/QuestionSection.css';

export default function QuestionSection({ questionNumber, question }) {
    return (
        <div className='question-section'>
          <h3>Question: {questionNumber}</h3>

          <label>
            <input name='questionField' id='questionField' type='text' defaultValue={question} required/>
          </label>
        </div>
    );
}
