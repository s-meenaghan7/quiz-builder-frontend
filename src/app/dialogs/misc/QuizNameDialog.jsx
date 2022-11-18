import React, { useState } from 'react';
import './QuizNameDialog.css';
import ReactDom from 'react-dom';

export default function QuizNameDialog({ open, openDialog, data }) {
  let [quizName, setQuizName] = useState(''); // may need/want to use useRef here... will see!

  if (!open) return null;

  const functionBtnHandler = () => {
    data.dialogFunction();
    openDialog(false);
  }

  const quizNameFieldChangeHandler = (e) => {
    setQuizName(e.target.value);
  }

  return ReactDom.createPortal(

    <div className='dialog_background'>
      <div className='dialog_container'>
        <div className='title'>
          <h3>Please provide a name for your new quiz:</h3>
        </div>
        <div className='body'>
          <input
            type='text'
            id='quiz_name'
            name='quiz_name'
            autoComplete='off'
            placeholder='Your quiz name here'
            onChange={(e) => quizNameFieldChangeHandler(e)}
            required 
          />
        </div>
        <div className='dialog_footer'>
          <button id='function_btn' onClick={() => functionBtnHandler()} disabled={quizName.trim() === ''}>OK</button>
        </div>
      </div>
    </div>,

    document.getElementById('dialog_portal')
  );
}