import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registerSlice";
import loginReducer from "./loginSlice";
import postReducer from "./postSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    post: postReducer,
  },
});
export default store;
