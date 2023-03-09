import React from 'react';
import './ConfirmDialog.css';
import ReactDom from 'react-dom';

export default function ConfirmDialog({ open, openDialog, data }) {
  if (!open) return null;

  const functionBtnHandler = () => {
    data.dialogFunction();
    openDialog(false);
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
          <h2>{data.title}</h2>
        </div>
        <div className='body'>
          <p>{data.description}</p>
        </div>
        <div className='dialog_footer'>
          <button id='cancel_btn' onClick={() => openDialog(false)}>Cancel</button>
          <button id='function_btn' onClick={() => functionBtnHandler()}>{data.functionBtnText}</button>
        </div>
      </div>
    </div>,

    document.getElementById('dialog_portal')
  );
}
