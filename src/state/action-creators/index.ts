export const depositMoney = (amount: any) => {
  return (dispatch: any) => {
    console.log("dispatch", amount, dispatch);
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: any) => {
  return (dispatch: any) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
