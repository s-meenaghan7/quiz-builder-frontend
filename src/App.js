import './styles/App.css';
import { useState } from 'react';
import AnswerControls from './components/AnswerControls';
import AnswerSection from './components/AnswerSection';
import QuestionSection from './components/QuestionSection';
import QuestionControls from './components/QuestionControls';

export default function App() {

  let [numberOfAnswers, setNumberOfAnswers] = useState(2);
  let [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(numberOfAnswers).fill( {} ));
  const [quizData, setQuizData] = useState(Array(1));

  const formIsValid = () => {
    if (document.querySelector('#questionField').value.trim() === "") {
      alert("Please enter a question and provide at least 2 answers.");
      return false;
    }

    let answered = false;
    for (let answer of answers) {

      if (answer.answer.trim() === "") {
        alert("Please provide an answer in each answer field added to this question.")
        return false;
      }

      if (answer.isCorrect === true)
        answered = true;
    }

    if (!answered) {
      alert("A correct answer must be indicated. Please select the correct answer to this question.");
      return false;
    }

    return true; // valid
  }

  const createNewQuestion = () => {
    if (!formIsValid()) return;

    const question = {
      question: document.querySelector('#questionField').value.trim(),
      options: [
        ...answers
      ]
    };

    quizData[quizIndex] = question;

    console.log('question added to quizData');

    // Cleanup form for next question to be entered
    while (answers.length > 2) {
      answers.pop();
    }
    
    // This also forces the QuestionSection and AnswerSection to re-mount or update.
    setQuizIndex(quizIndex => quizIndex + 1);
  }

  return (
    <div className='App'>
      <form>
        <QuestionControls 
          createNewQuestion={createNewQuestion}
          quizData={quizData}
          quizIndex={quizIndex}
          setAnswers={setAnswers}
          setQuizIndex={setQuizIndex}
        />

        <QuestionSection 
          key={quizIndex + 1}
          questionNumber={quizIndex + 1}
        />

        <AnswerControls 
          answers={answers}
          numberOfAnswers={answers.length}
          setNumberOfAnswers={setNumberOfAnswers}
        />

        <AnswerSection 
          key={quizIndex}
          answers={answers}
        />
      </form>
    </div>
  );
}
