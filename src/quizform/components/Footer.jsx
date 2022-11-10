import React, { useState } from 'react';
import ConfirmDialog from '../../app/dialog/ConfirmDialog';
import '../styles/Footer.css';

export default function Footer({ quizDataDispatch, quizIndex }) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const resetForm = () => {
    // Reset current question answer count to default of 2
    quizDataDispatch({ type: "DEFAULT_ANSWERS_COUNT", id: quizIndex })

    document.querySelectorAll('input[type=text]').forEach(input => input.value = '');
    document.querySelectorAll('input[type=radio]').forEach(input => input.checked = false);
  }

  // disable quiz button if length of quizData < 2 (because at least 1 question must be saved to the quiz before it can be submitted!)
  // disable delete question button if we are on the last question in quizData (because the last question is always an unsaved question being created)

  return (
    <footer className='quizform_footer'>
      <button type='button' className='footer_button reset' onClick={() => setDialogIsOpen(true)}>RESET FORM</button>
      <ConfirmDialog
        open={dialogIsOpen}
        openDialog={setDialogIsOpen}
        resetForm={resetForm}
      />

      <button type='button' className='footer_button submit'>SUBMIT QUIZ</button>
      <button type='button' className='footer_button delete'>DELETE QUESTION</button>
    </footer>
  );
}
