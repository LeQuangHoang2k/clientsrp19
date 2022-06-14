import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter/counterSlice";
// import userReducer from "../features/user/userSlice";
// import customerReducer from "../features/customer/customerSlice";
// import cartReducer from "../features/cart/cartSlice";
// import orderReducer from "../features/order/orderSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    // user: userReducer,
    // customer: customerReducer,
    // cart: cartReducer,
    // order: orderReducer,
  },
});
