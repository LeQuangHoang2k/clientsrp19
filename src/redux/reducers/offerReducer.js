const initialState = {
  list: [],
};

export const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OFFER":
      return { ...state, list: action.data };
    default:
      return state;
  }
};
