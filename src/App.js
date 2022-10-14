import './styles/App.css';
import { useEffect, useState } from 'react';
import AnswerControls from './components/AnswerControls';
import AnswerSection from './components/AnswerSection';
import QuestionSection from './components/QuestionSection';
import QuestionControls from './components/QuestionControls';

export default function App() {

  let [numberOfAnswers, setNumberOfAnswers] = useState(2);
  let [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizData, setQuizData] = useState(
    [{
      question: "test",
      options: [
        {id: 1, answer: "test1", isCorrect: false},
        {id: 2, answer: "test2", isCorrect: false},
        // {id: 3, answer: "b", isCorrect: false}
      ]
    }]
  );

  useEffect(() => {
    setAnswers(quizData.options)
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
          quizData={quizData}
          answers={answers}
          
        />

        <AnswerSection 
          key={quizIndex}
          answers={answers}
          quizData={quizData}
          quizIndex={quizIndex}
        />
      </form>
    </div>
  );
}
