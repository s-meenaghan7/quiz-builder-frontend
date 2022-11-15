import { blankQuestion } from "./blankQuestion";

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_QUESTION":
      const newQuizData = state.map((q, i) => {
        if (i === action.index) {
          return {
            id: i + 1,
            question: document.querySelector('#questionField').value,
            options: [
              ...action.setAnswers()
            ]
          };
        } else {
          return q;
        }
      });

      if (action.index === newQuizData.length - 1) {
        // create new blank question if we are saving question at end of quizData array
        newQuizData.push({ ...blankQuestion, id: newQuizData.length + 1 });
      }

      return newQuizData;
    
    case "DELETE_QUESTION":
      // remove the question whose index === quizIndex (action.id)
      const modifiedQuizData = state.filter((q, i) => i !== action.id);

      // go over all quiz elements and update their id, then return
      return modifiedQuizData.map((q, i) => {
        return { ...q, id: i + 1 };
      });

    case "ADD_ANSWER":
      return state.map((question) => {
        if (question.id === action.id + 1) {
          return { ...question, options: [...question.options, { id: question.options.length + 1, answer: "", isCorrect: false }] };
        } else {
          return question;
        }
      });

    case "SUBTRACT_ANSWER":
      if (state[action.id].options.length > 2) {
        return state.map((question) => {
          if (question.id === action.id + 1) {
            return { ...question, options: question.options.slice(0, question.options.length - 1) };
          } else {
            return question;
          }
        });
      } else {
        return state;
      }
    
    case "SET_ANSWERS_TO_DEFAULT":
      return state.map((question) => {
        if (question.id === action.id + 1) {
          return { ...question, options: question.options.slice(0, 2) };
        } else {
          return question;
        }
      });

    default:
      return state;
  }
}

export default reducer;