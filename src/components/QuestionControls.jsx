import React from 'react';
import '../styles/QuestionControls.css';

export default function QuestionControls({ quizData, quizIndex, setQuizIndex, createNewQuestion }) {

    const previousQuestionHandler = () => {
        if (quizIndex > 0) setQuizIndex(quizIndex => quizIndex - 1);
    }
    
    const nextQuestionHandler = () => {
        if (quizIndex !== quizData.length - 1) setQuizIndex(quizIndex => quizIndex + 1);
    }

    return (
        <>
            <div className='question-controls'>
                <div>
                    <button type='button'>Submit Quiz</button>
                </div>

                <div>
                    <button type='button' onClick={ () => previousQuestionHandler() }>Previous Question</button>
                    <button type='button' onClick={ () => createNewQuestion() }>Save Question</button>
                    <button type='button' onClick={ () => nextQuestionHandler() }>Next Question</button>
                </div>
            </div>

            <div className='question-test-controls' >
                <button type='button' onClick={ () => console.log(quizIndex) }>Quiz Index</button>
                <button type='button' onClick={ () => console.log(quizData) }>Get Quiz Data</button>
            </div>
        </>
    );
}
