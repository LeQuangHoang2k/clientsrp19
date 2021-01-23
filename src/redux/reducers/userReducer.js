const initialState = {
  id: "default",
  email: "default",
  name: "default",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        id: action.data.id,
        email: action.data.email,
        name: action.data.name,
      };
    }

    case "LOGOUT": {
      return { ...state, email: "default", name: "default" };
    }
    default:
      return state;
  }
};
