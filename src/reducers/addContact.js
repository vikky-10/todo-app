var initialState = false;
export const addNewUser = (state = initialState, action) => {
  console.log("add button payload", action.payload);
  if (action.type === "ADD_NEW_USER") {
    return action.payload;
  }
  return state;
};

export const updateButton = (state = false, action) => {
  console.log("edit button payload", action.payload);
  if (action.type === "UPDATE_BUTTON") {
    return action.payload;
  }
  return state;
};
export const disableButton = (state = false, action) => {
  if (action.type === "DISABLE_BUTTON") {
    return action.payload;
  }
  return state;
};
