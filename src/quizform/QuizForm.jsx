import { useEffect, useReducer, useState } from 'react';
import QuestionControls from './components/QuestionControls';
import QuestionSection from './components/QuestionSection';
import AnswerControls from './components/AnswerControls';
import AnswerSection from './components/AnswerSection';
import Footer from './components/Footer';
import reducer from './reducer/reducer';
import { blankQuestion } from './reducer/blankQuestion';
import './QuizForm.css';

export default function QuizForm(props) {
  let [quizIndex, setQuizIndex] = useState(0);
  const [quizData, quizDataDispatch] = useReducer(reducer, [blankQuestion]);
  const [currentQuestion, setCurrentQuestion] = useState(blankQuestion);

  useEffect(() => {
    setCurrentQuestion(() => quizData[quizIndex]);
  }, [quizData, quizIndex]);

  const formIsValid = () => {
    if (document.querySelector('#questionField').value.trim() === "") {
      alert("Please enter a question and provide at least 2 answers.");
      return false;
    }

    const radios = document.querySelectorAll('input[name="isCorrect"]');
    const answerFields = document.querySelectorAll('input[name="answer"]');
    let answered = false;

    for (let i = 0; i < answerFields.length; ++i) {
      if (answerFields[i].value.trim() === "") {
        alert("Please provide an answer in each answer field added to this question.")
        return false;
      }

      if (radios[i].checked) answered = true;
    }

    if (!answered) {
      alert("A correct answer must be indicated. Please select the correct answer to this question.");
      return false;
    }

    return true;
  }

  const getAnswersFromForm = () => {
    const newAnswers = [];
    const answersFormData = document.querySelectorAll('.answer');

    for (let i = 0; i < answersFormData.length; ++i) {
      let newAnswer = {};

      newAnswer.id = parseInt(answersFormData[i].children[0].innerHTML, 10);
      newAnswer.answer = answersFormData[i].children[1].children[0].value;
      newAnswer.isCorrect = answersFormData[i].children[2].children[0].checked;

      newAnswers.push(newAnswer);
    }

    return newAnswers;
  }

  const saveQuestion = () => {
    quizDataDispatch({ type: "SAVE_QUESTION", index: quizIndex, setAnswers: getAnswersFromForm });
  }

  const createNewQuestion = () => {
    if (formIsValid()) {
      saveQuestion();
      alert('Question Saved.'); // delete/change later; would prefer a notification that does not pause the browser and require the user to click OK.
      setQuizIndex(quizIndex => quizIndex + 1);
    }
  }

  return (
    <>
      <div className='quizform'>
        <form autoComplete='off'>
          <QuestionControls
            quizData={quizData}
            quizIndex={quizIndex}
            setQuizIndex={setQuizIndex}
            createNewQuestion={createNewQuestion}
            currentQuestion={currentQuestion} // only here for testing purposes/logging the value
          />

          <QuestionSection
            key={'Q' + (quizIndex + 1)}
            questionId={quizIndex + 1}
            question={quizData[quizIndex].question}
          />

          <AnswerControls
            quizIndex={quizIndex}
            quizDataDispatch={quizDataDispatch}
            answersCount={quizData[quizIndex].options.length}
          />

          <AnswerSection
            key={'A' + (quizIndex + 1)}
            quizData={quizData}
            quizIndex={quizIndex}
          />
        </form>
      </div>
      
      <Footer
        quizData={quizData}
        quizIndex={quizIndex}
        setQuizIndex={setQuizIndex}
        quizDataDispatch={quizDataDispatch}
      />
    </>
  );
}