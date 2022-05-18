const initialState = [];
const editReducer = (state = initialState, action) => {
  if (action.type === "EDIT_USER") {
    return action.payload;
  }
  return state;
};

export default editReducer;
