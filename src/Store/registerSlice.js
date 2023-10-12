import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    username: "",
    email: "",
    password: "",
    dateofbirth: "",
    gender: "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setDateofbirth: (state, action) => {
      state.dateofbirth = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { setDateofbirth, setEmail, setGender, setPassword, setUsername } =
  registerSlice.actions;
export default registerSlice.reducer;
