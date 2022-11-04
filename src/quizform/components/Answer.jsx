import '../styles/Answer.css';

export default function Answer({ id, answer, isCorrect }) {

  return (
    <tr className='answer'>
      <td style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{id}</td>
      <td><input type='text' name='answer' defaultValue={answer} required /></td>
      <td>
        <input className='radio' id={`radio${id}`} type='radio' name='isCorrect' defaultChecked={isCorrect} />
        <label htmlFor={`radio${id}`}></label>
      </td>
    </tr>
  );
}
