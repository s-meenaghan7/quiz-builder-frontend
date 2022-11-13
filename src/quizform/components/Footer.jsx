import React, { useState } from 'react';
import ConfirmDialog from '../../app/dialog/ConfirmDialog';
import '../styles/Footer.css';

export default function Footer({ quizDataDispatch, quizIndex }) {
  const [resetFormDialogIsOpen, setResetFormDialogIsOpen] = useState(false);
  const [deleteQuestionDialogIsOpen, setDeleteQuestionDialogIsOpen] = useState(false);
  const [submitQuizDialogIsOpen, setSubmitQuizDialogIsOpen] = useState(false);

  /*
    TODO: (likely in a useEffect)
      disable submit quiz button if length of quizData < 2 (because at least 1 question must be saved to the quiz before it can be submitted!)
        for this reason, the Footer needs the quizData as a prop, and also so it can delete questions from the quizData
      disable delete question button if we are on the last question in quizData (because the last question is always an unsaved question being created)
      quizData must also be a prop for submitting the quiz in submitQuiz()
   */

  const resetForm = () => {
    // Reset current question answer count to default of 2
    quizDataDispatch({ type: "SET_ANSWERS_TO_DEFAULT", id: quizIndex });

    document.querySelectorAll('input[type=text]').forEach(input => input.value = '');
    document.querySelectorAll('input[type=radio]').forEach(input => input.checked = false);
  }

  const deleteQuestion = () => {
    console.log('deletes a question, yet to be implemented!');
    // todo
  }

  const submitQuiz = () => {
    console.log('saves the quiz, yet to be implemented!');
    // todo
  }

  return (
    <footer className='quizform_footer'>
      <button type='button' className='footer_button reset' onClick={() => setResetFormDialogIsOpen(true)}>RESET FORM</button>
      <ConfirmDialog
        open={resetFormDialogIsOpen}
        openDialog={setResetFormDialogIsOpen}
        data={{ title: "Reset Form?",
                description: "Resetting the form clears all fields and resets the number of answers to the default of two.",
                dialogFunction: resetForm,
                functionBtnText: "Reset Form" }}
      />

      <button type='button' className='footer_button submit' onClick={() => setSubmitQuizDialogIsOpen(true)}>SUBMIT QUIZ</button>
      <ConfirmDialog
        open={submitQuizDialogIsOpen}
        openDialog={setSubmitQuizDialogIsOpen}
        data={{ title: "Submit Quiz?",
                description: "Are you sure you're ready to save this quiz?",
                dialogFunction: submitQuiz,
                functionBtnText: "Submit Quiz" }}
      />

      <button type='button' className='footer_button delete' onClick={() => setDeleteQuestionDialogIsOpen(true)}>DELETE QUESTION</button>
      <ConfirmDialog
        open={deleteQuestionDialogIsOpen}
        openDialog={setDeleteQuestionDialogIsOpen}
        data={{ title: "Delete Question?",
                description: "This action will permanently delete this question from the quiz. Are you sure you want to do this?",
                dialogFunction: deleteQuestion,
                functionBtnText: "Delete Question" }}
      />
    </footer>
  );
}
