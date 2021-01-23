import io from "socket.io-client";

const initialState = {
  socket: io(`http://localhost:4000/`),
};

export const socketReducer = (state = initialState, action) => {
  return state;
};
