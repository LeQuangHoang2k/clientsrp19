const initialState = {
  list: [],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE": {
      console.log(action.data.list);
      return {
        ...state,
        list: action.data.list,
      };
    }
    
    default:
      return state;
  }
};
