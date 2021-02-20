const initialState = {
  list: [],
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CALENDAR": {
      console.log(action.data);
      return {
        ...state,
        list: action.data.list,
      };
    }

    default:
      return state;
  }
};
