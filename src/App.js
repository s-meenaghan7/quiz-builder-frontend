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
  }, []); 

  const formIsValid = () => {
    if (document.querySelector('#questionField').value.trim() === "") {
      alert("Please enter a question and provide at least 2 answers.");
      return false;
    }

    const radios = document.querySelectorAll('input[name="isCorrect"]');
    const answers = document.querySelectorAll('input[name="answer"]');
    let answered = false;

    for (let i = 0; i < answers.length; ++i) {
      if (answers[i].value.trim() === "") {
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
            ...getAnswers()
          ]
        };
      } else {
        return q;
      }
    });

    // add the new, blank question to the quiz to navigate to
    newQuizData.push(blankQuestion);
    setQuizData(newQuizData);
  }

  const getAnswers = () => {
    const newAnswers = [];
    const answersFormData = document.querySelectorAll('.answer');
    let newAnswer = {};

    for (let i = 0; i < answers.length; ++i) {
      newAnswer.id = parseInt(answersFormData[i].children[0].innerHTML, 10);
      newAnswer.answer = answersFormData[i].children[1].children[0].value;
      newAnswer.isCorrect = answersFormData[i].children[2].children[0].checked;

      newAnswers.push(newAnswer);
      newAnswer = {};
    }

    return newAnswers;
  }

  const createNewQuestion = () => {
    if (formIsValid()) {
      saveQuestion();
      alert('Question Saved.'); // delete later
      setQuizIndex(quizIndex => quizIndex + 1);
    }
  }

  return (
    <div className='App'>
      <form>
        <QuestionControls // quiz data and quiz index props no longer needed after implementing previous question and submit quiz buttons. test controls no longer needed
          quizData={quizData}
          quizIndex={quizIndex}
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
