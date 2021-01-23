const initialState = {
  isCreateRoom: false,
};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE": {
      console.log(action.data);
      alert(action.data.value);
      return {
        ...state,
        isCreateRoom: action.data.value,
      };
    }

    default:
      return state;
  }
};
