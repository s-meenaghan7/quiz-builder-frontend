import React, { useEffect, useState } from 'react';
import ConfirmDialog from '../../app/dialogs/confirm/ConfirmDialog';
import QuizNameDialog from '../../app/dialogs/misc/QuizNameDialog';
import '../styles/Footer.css';

export default function Footer({ quizData, quizIndex, quizDataDispatch }) {
  const [resetFormDialogIsOpen, setResetFormDialogIsOpen] = useState(false);
  const [deleteQuestionDialogIsOpen, setDeleteQuestionDialogIsOpen] = useState(false);
  const [submitQuizDialogIsOpen, setSubmitQuizDialogIsOpen] = useState(false);
  const [quizNameDialogIsOpen, setQuizNameDialogIsOpen] = useState(false);

  useEffect(() => { // disable/enable the 'submit quiz'and 'delete question' buttons
    const submitBtn = document.getElementById('submit');
    const deleteBtn = document.getElementById('delete');

    if (quizData.length < 2) {
      submitBtn.setAttribute('disabled', true);
    } else {
      submitBtn.removeAttribute('disabled');
    }

    if (quizIndex === quizData.length - 1) {
      deleteBtn.setAttribute('disabled', true);
    } else {
      deleteBtn.removeAttribute('disabled');
    }
  }, [quizIndex, quizData.length]);

  const resetForm = () => {
    // Reset current question answer count to default of 2
    quizDataDispatch({ type: "SET_ANSWERS_TO_DEFAULT", id: quizIndex });

    document.querySelectorAll('input[type=text]').forEach(input => input.value = '');
    document.querySelectorAll('input[type=radio]').forEach(input => input.checked = false);
  }

  const deleteQuestion = () => {
    quizDataDispatch({ type: "DELETE_QUESTION", id: quizIndex });
  }

  const submitQuiz = () => {
    const completeQuiz = [
      { quizName: document.getElementById('quiz_name').value }, 
      quizData.slice(0, quizData.length - 1)
    ];

    console.log(JSON.stringify(completeQuiz, null, 2)); // logs to console for now; will eventually be sent to backend DB
  }

  const getQuizName = () => {
    setQuizNameDialogIsOpen(true);
  }

  return (
    <footer className='quizform_footer'>
      <button type='button' id='reset' className='footer_button reset' onClick={() => setResetFormDialogIsOpen(true)}>RESET FORM</button>
      <ConfirmDialog
        open={resetFormDialogIsOpen}
        openDialog={setResetFormDialogIsOpen}
        data={{ title: "Reset Form?",
                description: "Resetting the form clears all fields and resets the number of answers to the default of two (does not alter saved question data).",
                dialogFunction: resetForm,
                functionBtnText: "Reset Form" }}
      />

      <button type='button' id='submit' className='footer_button submit' onClick={() => setSubmitQuizDialogIsOpen(true)}>SUBMIT QUIZ</button>
      <ConfirmDialog
        open={submitQuizDialogIsOpen}
        openDialog={setSubmitQuizDialogIsOpen}
        data={{ title: "Submit Quiz?",
                description: "Are you sure you're ready to save this quiz?",
                dialogFunction: getQuizName,
                functionBtnText: "Submit Quiz" }}
      />
      <QuizNameDialog
        open={quizNameDialogIsOpen}
        openDialog={setQuizNameDialogIsOpen}
        data={{ dialogFunction: submitQuiz }}
      />

      <button type='button' id='delete' className='footer_button delete' onClick={() => setDeleteQuestionDialogIsOpen(true)}>DELETE QUESTION</button>
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
