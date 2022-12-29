import { useReducer, useState } from 'react';
import ToastService from '../app/toasts/ToastService';
import QuestionTestControls from './test_controls/QuestionTestControls';
import QuestionControls from './components/QuestionControls';
import QuestionSection from './components/QuestionSection';
import AnswerSection from './components/AnswerSection';
import Footer from './components/Footer';
import reducer from './reducer/reducer';
import { blankQuestion } from './reducer/blankQuestion';
import './QuizForm.css';

export default function QuizForm(props) {
  let [quizIndex, setQuizIndex] = useState(0);
  const [quizData, quizDataDispatch] = useReducer(reducer, [blankQuestion]);

  const formIsValid = () => {
    if (document.querySelector('#questionField').value.trim() === "") {
      ToastService.warn("Question field is empty.");
      return false;
    }

    const radios = document.querySelectorAll('input[name="isCorrect"]');
    const answerFields = document.querySelectorAll('input[name="answer"]');
    let answered = false;

    for (let i = 0; i < answerFields.length; ++i) {
      if (answerFields[i].value.trim() === "") {
        ToastService.warn("An answer field is empty.");
        return false;
      }

      if (radios[i].checked) answered = true;
    }

    if (!answered) {
      ToastService.warn("A correct answer must be indicated.");
      return false;
    }

    return true;
  }

  const getQuestionFromForm = () => {
    const newId = quizIndex + 1;
    const newQuestion = document.querySelector('#questionField').value;

    const newAnswers = [];
    const answersFormData = document.querySelectorAll('.answerRow');

    for (let i = 0; i < answersFormData.length; ++i) {
      let newAnswer = {};

      newAnswer.id = parseInt(answersFormData[i].children[0].innerHTML, 10);
      newAnswer.answer = answersFormData[i].children[1].children[0].value;
      newAnswer.isCorrect = answersFormData[i].children[2].children[0].checked;

      newAnswers.push(newAnswer);
    }

    return { id: newId, question: newQuestion, options: newAnswers };
  }

  const saveQuestion = () => {
    quizDataDispatch({ type: "SAVE_QUESTION", index: quizIndex, getNewQuestion: getQuestionFromForm });
    ToastService.success("Question saved!");
  }

  return (
    <>
      <QuestionTestControls 
        hidden={true}
        quizIndex={quizIndex}
        quizData={quizData}
      />

      <div className='quizform' key={quizData.length}>
        <form action='' autoComplete='off' method='POST'>
          <QuestionControls
            quizData={quizData}
            quizIndex={quizIndex}
            setQuizIndex={setQuizIndex}
            formIsValid={formIsValid}
            saveQuestion={saveQuestion}
          />

          <QuestionSection
            key={`Q${quizIndex + 1}`}
            currentQuestion={quizData[quizIndex]}
          />

          <AnswerSection
            key={`A${quizIndex + 1}`}
            currentQuestion={quizData[quizIndex]}
          />

          <Footer
            quizIndex={quizIndex}
            quizData={quizData}
            quizDataDispatch={quizDataDispatch}
          />
        </form>
      </div>
    </>
  );
}