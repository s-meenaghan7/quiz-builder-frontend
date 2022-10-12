import React, { useEffect, useState } from 'react';
import '../styles/Answer.css';

export default function Answer({ id, setAnswerData, setCorrectAnswer }) {

    const [answer, setAnswer] = useState({
                id: id,
                answer: "",
    });

    useEffect(() => {
        setAnswerData(answer);
    }, []);

    const changeAnswerHandler = (event) => {
        answer.answer = event.target.value;
        setAnswerData(answer);
        setCorrectAnswer();
    }

    const radioButtonHandler = (event) => {
        setCorrectAnswer();
    }

    return (
        <tr className='answer'>
            <td> {id} </td>
            <td> <input type='text' name='answerField' onChange={ (e) => changeAnswerHandler(e) } required/> </td>
            <td> <input type='radio' name='isCorrect' onChange={ (e) => radioButtonHandler(e) } /> </td>
        </tr>
    );
}
