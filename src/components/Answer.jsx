import '../styles/Answer.css';

export default function Answer({ id, answer, isCorrect }) {

    return (
        <tr className='answer'>
            <td> {id} </td>
            <td> <input type='text' name='answer' defaultValue={answer} required/> </td>
            <td> <input type='radio' name='isCorrect' defaultChecked={isCorrect}/> </td>
        </tr>
    );
}
