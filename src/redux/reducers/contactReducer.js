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

    // case "UPDATE": {
    //   const { preLastMessage, lastMessage } = action.data;
    //   const { list } = state;

    //   console.log("lastMessage", lastMessage);
    //   console.log("list", list);
    //   console.log("preLastMessage", preLastMessage);

    //   if (!preLastMessage) return { ...state };
    //   console.log(preLastMessage._id);
    //   return {
    //     ...state,
    //     // list: list,
    //   };
    // }

    default:
      return state;
  }
};
