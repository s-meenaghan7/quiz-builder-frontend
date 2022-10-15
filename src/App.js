import './styles/App.css';
import { useEffect, useState } from 'react';
import AnswerControls from './components/AnswerControls';
import AnswerSection from './components/AnswerSection';
import QuestionSection from './components/QuestionSection';
import QuestionControls from './components/QuestionControls';

export default function App() {

  let [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizData, setQuizData] = useState(
    [{
      question: "test",
      options: [
        {id: 1, answer: "test1", isCorrect: false},
        {id: 2, answer: "test2", isCorrect: false}, // data in this object is dummy data
        // {id: 3, answer: "b", isCorrect: false}
      ]
    }]
  );

  useEffect(() => {
    setAnswers(quizData[quizIndex].options);
  }, []);

  return (
    <div className='App'>
      <form>
        <QuestionControls 
          quizData={quizData}
          quizIndex={quizIndex}
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
