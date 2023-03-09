import { blankQuestion } from "./blankQuestion";

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_QUESTION":
      const newQuizData = state.map((q, i) => {
        if (i === action.index) {
          return action.getNewQuestion();
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

    default:
      return state;
  }
}

export default reducer;
