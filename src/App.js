import './styles/App.css';
import { useEffect, useState } from 'react';
import AnswerControls from './components/AnswerControls';
import AnswerSection from './components/AnswerSection';
import QuestionSection from './components/QuestionSection';
import QuestionControls from './components/QuestionControls';

const blankQuestion = {
  question: "",
  options: [
    {id: 1, answer: "", isCorrect: false},
    {id: 2, answer: "", isCorrect: false}, 
  ]
};

export default function App() {
  let [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizData, setQuizData] = useState([blankQuestion]);

  useEffect(() => {
    setAnswers(quizData[quizIndex].options);
    // eslint-disable-next-line
  }, [quizIndex]); // TODO: navigating between questions (from a previous to a next) is bugged. Answer and radio button selection are always one state update behind. So the previous answers state shows, for radio buttons and answer themselves.

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

  const saveQuestion = () => {
    const newQuizData = quizData.map((q, i) => {
      if (i === quizIndex) {
        return {
          question: document.querySelector('#questionField').value,
          options: [
            ...getAnswersFromForm()
          ]
        };
      } else {
        return q;
      }
    });

    if (quizIndex === quizData.length - 1) {
      newQuizData.push(blankQuestion);
    } 

    setQuizData(newQuizData);
  }

  const getAnswersFromForm = () => {
    const newAnswers = [];
    const answersFormData = document.querySelectorAll('.answer');

    for (let i = 0; i < answers.length; ++i) {
      let newAnswer = {};

      newAnswer.id = parseInt(answersFormData[i].children[0].innerHTML, 10);
      newAnswer.answer = answersFormData[i].children[1].children[0].value;
      newAnswer.isCorrect = answersFormData[i].children[2].children[0].checked;

      newAnswers.push(newAnswer);
    }

    return newAnswers;
  }

  const createNewQuestion = () => {
    if (formIsValid()) {
      saveQuestion();
      alert('Question Saved.'); // delete/change later
      setQuizIndex(quizIndex => quizIndex + 1);
    }
  }

  return (
    <div className='App'>
      <form>
        <QuestionControls
          quizData={quizData}
          quizIndex={quizIndex}
          setQuizIndex={setQuizIndex}
          createNewQuestion={createNewQuestion}
        />

        <QuestionSection
          key={quizIndex + 1}
          questionNumber={quizIndex + 1}
          question={quizData[quizIndex].question}
        />

        <AnswerControls
          answers={answers}
          setAnswers={setAnswers}
        />

        <AnswerSection 
          key={quizIndex}
          answers={answers}
        />
      </form>
    </div>
  );
}
