import '../styles/Answer.css';

export default function Answer({ answerData, answerTextChanged, correctAnswerChanged }) {

  return (
    <tr className='answerRow'>
      <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
        {answerData.id}
      </td>
      
      <td>
        <input 
          type='text'
          name='answer'
          className='answer'
          id={`answer${answerData.id}`}
          placeholder={`Answer ${answerData.id}`}
          defaultValue={answerData.answer}
          onChange={(e) => answerTextChanged(e, answerData.id)}
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
          onChange={(e) => correctAnswerChanged(e)}
        />
        <label htmlFor={`radio${answerData.id}`}></label>
      </td>
    </tr>
  );
}
