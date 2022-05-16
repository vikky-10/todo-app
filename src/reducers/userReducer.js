const initialState = [];
const Add = (state = initialState, action) => {
  if (action.type === "ADD_USER") {
    const arr = [action.payload, ...state];
    arr.map((item, idx) => {
      item["id"] = idx;
    });
    console.log(state);
    return arr;
  } else if (action.type === "DELETE_USER") {
    const arr = state.filter((item) => item.id !== action.payload);
    arr.map((item, idx) => {
      item["id"] = idx;
    });
    return arr;
  } else if (action.type === "UPDATE_USER") {
    console.log("update ke time ka ", action.payload.id);
    let arr = state.map((item) => {
      if (item.id == action.payload.id) {
        return {
          ...item,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone,
        };
      } else {
        return item;
      }
    });
    return arr;
  }
  return state;
};

export default Add;
