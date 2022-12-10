import React, { useState } from 'react';
import './QuizNameDialog.css';
import ReactDom from 'react-dom';

export default function QuizNameDialog({ open, openDialog, data }) {
  let [quizName, setQuizName] = useState('');

  if (!open) return null;

  const functionBtnHandler = () => {
    data.dialogFunction();
    openDialog(false);
  }

  const quizNameFieldChangeHandler = (e) => {
    setQuizName(e.target.value);
  }

  const backgroundClickHandler = (e) => {
    if (e.target.className === 'dialog_background') {
      openDialog(false);
    }
  }

  return ReactDom.createPortal(

    <div className='dialog_background' onClick={(e) => backgroundClickHandler(e)}>
      <div className='dialog_container'>
        <div className='title_close_btn'>
          <button onClick={() => openDialog(false)}> &times; </button>
        </div>
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
          <button id='ok_btn' onClick={() => functionBtnHandler()} disabled={quizName.trim() === ''}>OK</button>
        </div>
      </div>
    </div>,

    document.getElementById('dialog_portal')
  );
}