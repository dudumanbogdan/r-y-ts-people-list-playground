export const depositMoney = (amount: any) => {
  return (dispatch: (arg0: { type: string; payload: any }) => any) => {
    return dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: any) => {
  return (dispatch: (arg0: { type: string; payload: any }) => any) => {
    return dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
