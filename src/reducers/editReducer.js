const initialState = [];
const editReducer = (state = initialState, action) => {
  //   console.log("edit payload", action.payload);
  if (action.type === "EDIT_USER") {
    return action.payload;
  }
  return state;
};

export default editReducer;
