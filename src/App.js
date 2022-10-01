import './styles/App.css';
import './styles/AnswerSection.css';
import './styles/QuestionSection.css';
import './styles/Answer.css';
import './styles/Controls.css';

// todo: learn more about forms
// todo: build the entire form here and split parts of the form into components once complete. static version first!
// you know how you want it to look, now need to implement it.

// use a table to organize the answer section?
    // column 1 (Starting from left) > Number
    // column 2 > Textfield for the answer
    // column 3 > radio button for if that answer is correct for this q

function App() {
  return (
    <div className='App'>
      <form>
        <div className='question-section'>
          <label>Question
            <input />
          </label>
        </div>

        <div className='answer-section'>

          <label className='answer'>1
            <input />
            <input type='radio' name='isCorrect' />
          </label>

          <label className='answer'>2
            <input />
            <input type='radio' name='isCorrect' />
          </label>

        </div>

        {/* table sample, probably won't need the header */}
        <table width='100%'>
          <tr>
            <th>Number</th>
            <th>Answer</th>
            <th>Is Correct?</th>
          </tr>
          <tr>
            <td>1</td>
            <td><input type='text' /></td>
            <td><input type='radio' name='isCorrect' /></td>
          </tr>

          <tr>
            <td>2</td>
            <td><input type='text' /></td>
            <td><input type='radio' name='isCorrect' /></td>
          </tr>
        </table>

        <div className='controls'>
          <button type='button'>-</button>
          <button type='button'>+</button>
        </div>

      </form>
    </div>
  );
}

export default App;
