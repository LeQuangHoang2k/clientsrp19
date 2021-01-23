import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { envReducer } from "./envReducer";
import { userReducer } from "./userReducer";
import { offerReducer } from "./offerReducer";
import { currentContactReducer } from "./currentContactReducer";
import { contactReducer } from "./contactReducer";
import { initMessageReducer } from "./initMessageReducer";
import { roomReducer } from "./roomReducer";
import { socketReducer } from "./socketReducer";

const rootReducer = combineReducers({
  env: envReducer,
  user: userReducer,
  offer: offerReducer,
  currentContact: currentContactReducer,
  contact: contactReducer,
  initMessage: initMessageReducer,
  room: roomReducer,
  socket: socketReducer,
});

const persistConfig = {
  key: "srp19v0",
  storage,
  whitelist: ["user"],
};

export default persistReducer(persistConfig, rootReducer);
