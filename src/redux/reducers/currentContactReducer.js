const initialState = {
  id: "default",
  name: "default",
};

export const currentContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONTACT": {
      // alert(action.data.name);
      return {
        ...state,
        id: action.data.id,
        name: action.data.name,
      };
    }

    case "NAME": {
      // alert("name : " + action.data.name);
      return {
        ...state,
        name: action.data.name,
      };
    }

    case "ID": {
      // alert("id : " + action.data.id);
      return {
        ...state,
        id: action.data.id,
      };
    }

    default:
      return state;
  }
};
