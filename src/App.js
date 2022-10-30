import './styles/App.css';
import { useReducer, useState } from 'react';
import AnswerControls from './components/AnswerControls';
import AnswerSection from './components/AnswerSection';
import QuestionSection from './components/QuestionSection';
import QuestionControls from './components/QuestionControls';
import Navbar from './components/Navbar';

const blankQuestion = {
  id: 1,
  question: "",
  options: [
    {id: 1, answer: "", isCorrect: false},
    {id: 2, answer: "", isCorrect: false}, 
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_QUESTION":
      const newQuizData = state.map((q, i) => {
        if (i === action.index) {
          return {
            id: i + 1,
            question: document.querySelector('#questionField').value,
            options: [
              ...action.setAnswers()
            ]
          };
        } else {
          return q;
        }
      });

      if (action.index === newQuizData.length - 1) {
        newQuizData.push({...blankQuestion, id: newQuizData.length + 1});
      }

      return newQuizData;

    case "ADD_ANSWER":
      return state.map((question) => {
        if (question.id === action.id + 1) {
          return { ...question, options: [...question.options, {id: question.options.length + 1, answer: "", isCorrect: false}] };
        } else {
          return question;
        }
      });

    case "SUBTRACT_ANSWER":
      if (state[action.id].options.length > 2) {
        return state.map((question) => {
          if (question.id === action.id + 1) {
            return { ...question, options: question.options.slice(0, question.options.length - 1) };
          } else {
            return question;
          }
        });
      } else {
        return state;
      }
      
    default:
      return state;
  }
}

export default function App() {
  let [quizIndex, setQuizIndex] = useState(0);
  const [quizData, quizDataDispatch] = useReducer(reducer, [blankQuestion]);

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

    return true; // valid form
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
      alert('Question Saved.'); // delete/change later
      setQuizIndex(quizIndex => quizIndex + 1);
    }
  }

  return (
    <>
      <Navbar />
      
      <div className='App'>
        <form autoComplete='off'>
          <QuestionControls
            quizData={quizData}
            quizIndex={quizIndex}
            setQuizIndex={setQuizIndex}
            createNewQuestion={createNewQuestion}
          />

          <QuestionSection
            key={quizIndex + 1}
            questionId={quizIndex + 1}
            question={quizData[quizIndex].question}
          />

          <AnswerControls
            quizIndex={quizIndex}
            quizDataDispatch={quizDataDispatch}
          />

          <AnswerSection
            key={quizIndex}
            quizData={quizData}
            quizIndex={quizIndex}
          />
        </form>
      </div>
    </>
    
  );
}
