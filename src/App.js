import './styles/App.css';
import './styles/AnswerSection.css';
import './styles/QuestionSection.css';
import './styles/AnswerControls.css';
import './styles/QuestionControls.css';
import { useState } from 'react';
import Answer from './components/Answer';

function App() {

  let [numberOfAnswers, setNumberOfAnswers] = useState(2);
  const [answers, setAnswers] = useState(Array(numberOfAnswers).fill( <Answer /> ));
  const [quizData, setQuizData] = useState([1]);

  const addAnswer = () => {
    setNumberOfAnswers(numberOfAnswers + 1);

    answers.push( <Answer /> );
  }

  const subtractAnswer = () => {
    if (numberOfAnswers > 2) {
      setNumberOfAnswers(numberOfAnswers - 1);

      answers.pop();
    }
  }

  return (
    <div className='App'>

      <div className='question-controls'>
        <button type='button'>Previous Question</button>
        <button type='button'>New Question</button>
        <button type='button'>Submit Quiz</button>
      </div>

      <form>

        <div className='question-section'>
          <h3>Question: {quizData.length}</h3>

          <label>
            <input type='text'/>
          </label>
        </div>

        <div className='answer-controls'>
          <button type='button' onClick={ () => subtractAnswer() }>-</button>
          <button type='button' onClick={ () => addAnswer() }>+</button>
        </div>

        <div className='test-controls'>
          <button type='button' onClick={ () => console.log(numberOfAnswers) }>Number of Answers</button>
          <button type='button' onClick={ () => console.log(answers) }>Answers List</button>
        </div>

        <table className='answer-section' width='100%'>
          <thead>
            <tr>
              <th>Answer ID</th>
              <th>Answer</th>
              <th>Is Correct?</th>
            </tr>
          </thead>
          
          <tbody>
            {
              answers.map((a, i) => 
                <Answer key={i + 1} id={i + 1} />
              )
            }
          </tbody>
        </table>

      </form>
    </div>
  );
}

export default App;
