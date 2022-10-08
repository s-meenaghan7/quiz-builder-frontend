import './styles/App.css';
import './styles/AnswerSection.css';
import './styles/QuestionSection.css';
import './styles/QuestionControls.css';
import { useState } from 'react';
import AnswerControls from './components/AnswerControls';
import AnswerSection from './components/AnswerSection';

function App() {

  let [numberOfAnswers, setNumberOfAnswers] = useState(2);
  const [answers, setAnswers] = useState(Array(numberOfAnswers).fill( {} ));
  const [quizData, setQuizData] = useState(Array(1));

  const createNewQuestion = () => {
    // if (document.querySelector('#questionField').value === "") console.log('empty');

    // create the question object
    const question = {
      question: document.querySelector('#questionField').value,
      options: [
        // TODO: Answer.jsx; figuring out how to create an answer object, and those objects will be held in the answers array (state)
      ]
    }


  }

  return (
    <div className='App'>
      <form>

        <div className='question-controls'>
          <button type='button'>Previous Question</button>
          <button type='button' onClick={ () => createNewQuestion() }>New Question</button>
          <button type='button'>Submit Quiz</button>
        </div>

        <div className='question-test-controls'>
          <button type='button' onClick={ () => console.log(quizData) }>Get Quiz Data</button>
        </div>

        <div className='question-section'>
          <h3>Question: {quizData.length}</h3>

          <label>
            <input name='questionField' id='questionField' type='text' required/>
          </label>
        </div>

        <AnswerControls 
          answers={answers}
          numberOfAnswers={answers.length}
          setNumberOfAnswers={setNumberOfAnswers}
        />

        <AnswerSection 
          answers={answers}
        />

      </form>
    </div>
  );
}

export default App;
