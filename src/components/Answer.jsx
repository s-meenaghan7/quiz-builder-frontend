import React, { useEffect, useState } from 'react';
import '../styles/Answer.css';

export default function Answer({ id, answer, isCorrect }) {

    const [answerData, setAnswer] = useState({
                id: id,
                answer: answer,
                isCorrect: isCorrect
    });

    return (
        <tr className='answer' id={`answer${id}`}>
            <td> {id} </td>
            <td> <input type='text' name='answerField' defaultValue={answer} required/> </td>
            <td> <input type='radio' name='isCorrect'  /> </td>
        </tr>
    );
}
