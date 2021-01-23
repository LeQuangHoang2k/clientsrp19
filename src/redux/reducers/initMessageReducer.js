const initialState = {
  // list: [],
  messageLast: [], //{senderId:"",roomId:""}
};

export const initMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE": {
      console.log("addMess", action.data.lastMessage);
      return {
        ...state,
        messageLast: action.data.lastMessage,
      };
    }
    default: {
      return state;
    }
  }
};
