import React from 'react';
import './ConfirmDialog.css';
import ReactDom from 'react-dom';

export default function ConfirmDialog({ open, openDialog, resetForm, data }) { // data will be object containing keys for title, description, function
  if (!open) return null;

  const functionBtnHandler = () => {
    resetForm();
    openDialog(false);
  }

  return ReactDom.createPortal(

    <div className='dialog_background'>
      <div className='dialog_container'>
        <div className='title_close_btn'>
          <button onClick={() => openDialog(false)}> &times; </button>
        </div>
        <div className='title'>
          <h1>Example Title!</h1>
        </div>
        <div className='body'>
          <p>Just another example to be edited later, probably through passed in props to make this component reusable!!!</p>
        </div>
        <div className='dialog_footer'>
          <button id='cancel_btn' onClick={() => openDialog(false)}>Cancel</button>
          <button onClick={() => functionBtnHandler()}>Reset Form</button>
        </div>
      </div>
    </div>,

    document.getElementById('dialog_portal')
  );
}