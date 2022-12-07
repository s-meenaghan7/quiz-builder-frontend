import { blankQuestion } from "./blankQuestion";

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_QUESTION":
      const newState = state.map((question, i) => {
        return (action.index === i) ? action.newQuestion : question;
      });

      if (action.index === (state.length - 1)) {
        newState.push({ ...blankQuestion, id: state.length + 1 });
      }

      return newState;
    
    case "DELETE_QUESTION":
      // remove the question whose index === quizIndex (action.id)
      const modifiedQuizData = state.filter((q, i) => i !== action.id);

      // go over all quiz elements and update their id, then return
      return modifiedQuizData.map((q, i) => {
        return { ...q, id: i + 1 };
      });

    default:
      return state;
  }
}

export default reducer;