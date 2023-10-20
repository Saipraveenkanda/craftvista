import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./registerSlice";
import loginReducer from "./loginSlice";
import postReducer from "./postSlice";
import themeReducer from "./themeSlice";
import uploadReducer from "./uploadSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    post: postReducer,
    theme: themeReducer,
    upload: uploadReducer,
  },
});
export default store;
