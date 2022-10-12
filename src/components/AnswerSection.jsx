import React from 'react';
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
