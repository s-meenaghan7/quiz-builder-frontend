import React, { useEffect } from 'react';
import Answer from './Answer';
import '../styles/AnswerSection.css';

export default function AnswerSection({ answers }) {
    
    const setAnswerData = (answer) => {
        const index = answer.id - 1;
        answers[index] = {...answer};
    }

    const setCorrectAnswer = () => {
        const radios = document.querySelectorAll('input[name="isCorrect"]');

        for (let i = 0; i < radios.length; ++i) {
            answers[i].isCorrect = radios[i].checked;
        }
    }

    // possibly a useEffect for answers here? maybe for setCorrectAnswer??
    // TODO: try a useEffect that runs for dependency answers
    // useEffect(() => {
        // loop through answer id using for loop with i to do id = answer${i}

        // set answers.answer to children[1].children[0].value

        // may also need to do the radio button in this (if the answer isCorrect value is true, set children[2].children[0].checekd = true)
    // }, [answers]);

    return (
        <div className='answer-section'>
            <table id='answer-table' width='100%'>
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
                            <Answer 
                                key={i + 1} id={i + 1}
                                setAnswerData={setAnswerData}
                                setCorrectAnswer={setCorrectAnswer}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
