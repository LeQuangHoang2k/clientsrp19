import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(logger));
// export const store = createStore(rootReducer);
export const persistor = persistStore(store);
