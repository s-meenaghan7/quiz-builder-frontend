import React from 'react';
import '../styles/QuestionControls.css';

export default function QuestionControls({ quizData, quizIndex, setQuizIndex, createNewQuestion, formIsValid }) {

    const previousQuestionHandler = () => {
        // if (formIsValid()) {
        if (quizIndex > 0) setQuizIndex(quizIndex => quizIndex - 1);
        // }
    }
    
    const nextQuestionHandler = () => {
        // if (formIsValid()) {
        if (quizIndex !== quizData.length - 1) setQuizIndex(quizIndex => quizIndex + 1);
        // }
    }

    return (
        <>
            <div className='question-controls'>
                {/* <div>
                    <button type='button'>Submit Quiz</button>
                </div> */}

                <button type='button' onClick={ () => previousQuestionHandler() }>Previous Question</button>
                <button type='button' onClick={ () => createNewQuestion() }>Save Question</button>
                <button type='button' onClick={ () => nextQuestionHandler() }>Next Question</button>
            </div>

            <div className='question-test-controls' hidden>
                <button type='button' onClick={ () => console.log(quizIndex) }>Quiz Index</button>
                <button type='button' onClick={ () => console.log(quizData) }>Get Quiz Data</button>
            </div>
        </>
    );
}
