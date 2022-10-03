import './styles/App.css';
import './styles/AnswerSection.css';
import './styles/QuestionSection.css';
import './styles/Answer.css';
import './styles/Controls.css';
import { useState } from 'react';
import Answer from './components/Answer';

function App() {

  let [numberOfAnswers, setNumberOfAnswers] = useState(2);
  const [answers, setAnswers] = useState(Array(numberOfAnswers).fill( <Answer /> ));

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
      <form>

        <div className='question-section'>
          <label>Question: 
            <input type='text'/>
          </label>
        </div>

        <div className='answer-section'>
          {/* TODO */}
        </div>

        <table width='100%'>
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

        <div className='controls'>
          <button type='button' onClick={ () => subtractAnswer() }>-</button>
          <button type='button' onClick={ () => addAnswer() }>+</button>
        </div>

        <div className='test-controls'>
          <button type='button' onClick={ () => console.log(numberOfAnswers) }>Number of Answers</button>
          <button type='button' onClick={ () => console.log(answers) }>Answers List</button>
        </div>

      </form>
    </div>
  );
}

export default App;
