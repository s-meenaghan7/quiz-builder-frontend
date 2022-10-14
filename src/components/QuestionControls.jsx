import React from 'react';
import { flushSync } from 'react-dom';
import '../styles/QuestionControls.css';

export default function QuestionControls({ createNewQuestion, quizData, quizIndex, setAnswers, setQuizIndex }) {

    const goToPreviousQuestion = () => {
        // do not go to previous if we are on the first question
        if (quizIndex < 1) return;

        // get the question from quizData that is one index behind the current index
        const question = quizData[quizIndex - 1];

        // synchronously set the answers data to the question options, forces AnswerSection and QuestionSection to re-render right away
        flushSync(() => {
            setAnswers([...question.options]);
            setQuizIndex(quizIndex => quizIndex - 1);
        });

        // set the question field to the question value
        document.querySelector('#questionField').value = question.question;

        // loop through answers and set the answer field to the answer values
        // and set radio button to checked if current answer isCorrect
        const answerRows = document.querySelectorAll('.answer');
        for (let i = 0; i < answerRows.length; ++i) {
            answerRows[i].children[1].children[0].value = question.options[i].answer;

            if (question.options[i].isCorrect) {
                answerRows[i].children[2].children[0].checked = true;
            }
        }

        // TODO: see todo in AnswerSection.jsx *********************

        // decrement the quizIndex officially, as it is displayed in the QuestionSection

        // may need to ensure that answers is updated to the current answers, same with numberOfAnswers.
    }

    return (
        <>
            <div className='question-controls'>
                <button type='button' onClick={ () => goToPreviousQuestion() }>Previous Question</button>
                <button type='button' onClick={ () => createNewQuestion() }>New Question</button>
                <button type='button'>Submit Quiz</button>
            </div>

            <div className='question-test-controls'>
                <button type='button' onClick={ () => console.log(quizIndex) }>Quiz Index</button>
                <button type='button' onClick={ () => console.log(quizData) }>Get Quiz Data</button>
            </div>
        </>
    );
}
