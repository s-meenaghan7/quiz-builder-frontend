import { useEffect, useReducer, useState } from 'react';
import QuestionTestControls from './test_controls/QuestionTestControls';
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
  const [quizData, quizDataDispatch] = useReducer(reducer, []);
  const [currentQuestion, setCurrentQuestion] = useState(blankQuestion);

  useEffect(() => {
    if (quizData[quizIndex] === undefined) {
      setCurrentQuestion(() => {
        return { ...blankQuestion, id: quizIndex + 1 };
      });
    } else {
      setCurrentQuestion(() => quizData[quizIndex]);
    }
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

  const saveQuestion = () => {
    // save the currentQuestion to quizData[quizIndex]
    quizDataDispatch({ type: "SAVE_QUESTION", index: quizIndex, newQuestion: currentQuestion });

    alert('Question Saved.'); // delete/change later; would prefer a notification that does not pause the browser and require the user to click OK.
    // setCurrentQuestion to blankQuestion with Id + 1 ????
  }

  return (
    <>
      <QuestionTestControls
        hidden={false}
        quizIndex={quizIndex}
        quizData={quizData}
        currentQuestion={currentQuestion}
      />

      <div className='quizform' key={quizData.length}> 
        <form autoComplete='off'>
          <QuestionControls
            quizData={quizData}
            quizIndex={quizIndex}
            setQuizIndex={setQuizIndex}
            formIsValid={formIsValid}
            saveQuestion={saveQuestion}
          />

          <QuestionSection
            key={`Q${currentQuestion.id}`}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />

          <AnswerControls
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />

          <AnswerSection
            key={`A${currentQuestion.id}`}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        </form>
      </div>
      
      <Footer
        quizIndex={quizIndex}
        quizData={quizData}
        quizDataDispatch={quizDataDispatch}
        setCurrentQuestion={setCurrentQuestion}
      />
    </>
  );
}