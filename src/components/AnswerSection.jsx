import React from 'react';
import Answer from './Answer';
import '../styles/AnswerSection.css';

export default function AnswerSection({ quizData, quizIndex }) {

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
                        quizData[quizIndex].options.map((a) => 
                            <Answer 
                                key={a.id}
                                id={a.id}
                                answer={a.answer}
                                isCorrect={a.isCorrect}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
