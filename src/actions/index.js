export const Add = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};
export const Edit = (data) => {
  return {
    type: "EDIT_USER",
    payload: data,
  };
};
export const Delete = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
export const Button = (isActive) => {
  return {
    type: "ADD_NEW_USER",
    payload: isActive,
  };
};
export const updateButton = (isActive) => {
  return {
    type: "UPDATE_BUTTON",
    payload: isActive,
  };
};

export const Update = (data) => {
  console.log("update ke baad aaya", data);
  return {
    type: "UPDATE_USER",
    payload: data,
  };
};
export const Disable = (isDisable) => {
  return {
    type: "DISABLE_BUTTON",
    payload: isDisable,
  };
};
