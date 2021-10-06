const reducer = (state = 0, action: any) => {
  switch (action) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
