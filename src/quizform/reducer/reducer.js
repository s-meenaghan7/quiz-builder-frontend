const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_QUESTION":
      // if action.index === state.length, then this is a new question to simply add to state and return
      if (action.index === state.length) {
        state.push(action.newQuestion);
        return state;
      }
      // else, we are overwriting a saved question
      const newQuizData = state.map((q, i) => {
        if (i === action.index) {
          return action.newQuestion;
        } else {
          return q;
        }
      });

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