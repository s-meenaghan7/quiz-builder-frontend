import '../styles/Answer.css';

export default function Answer({ answerData }) {

  return (
    <tr className='answerRow'>
      <td id='answerRow_id'>
        {answerData.id}
      </td>
      
      <td>
        <input 
          type='text'
          name='answer'
          className='quizform_input'
          id={`answer${answerData.id}`}
          placeholder={`Answer ${answerData.id}`}
          defaultValue={answerData.answer}
          required
        />
      </td>

      <td>
        <input
          type='radio'
          name='isCorrect'
          className='radio'
          id={`radio${answerData.id}`}
          defaultChecked={answerData.isCorrect}
        />
        <label htmlFor={`radio${answerData.id}`}></label>
      </td>
    </tr>
  );
}
