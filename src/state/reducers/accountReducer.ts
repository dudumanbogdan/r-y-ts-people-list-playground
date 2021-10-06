const reducer = (state = 0, action: any) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
