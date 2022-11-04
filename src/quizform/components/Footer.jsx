import React from 'react';
import '../styles/Footer.css';

export default function Footer(props) {

  // clear button has no restrictions, simply clears all fields on screen to ""
  // disable quiz button if length of quizData < 2 (because at least 1 question must be saved to the quiz before it can be submitted!)
  // disable delete question button if we are on the last question in quizData (because the last question is always an unsaved question being created)

  return (
    <footer className='footer'>
      <button type='button' className='footer_button clear' >CLEAR FORM</button>
      <button type='button' className='footer_button submit' >SUBMIT QUIZ</button>
      <button type='button' className='footer_button delete' >DELETE QUESTION</button>
    </footer>
  );
}
