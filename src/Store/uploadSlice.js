import { createSlice } from "@reduxjs/toolkit";

export const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    myFile: "",
  },
  reducers: {
    setImageData: (state, action) => {
      state.file = action.payload;
    },
  },
});

export const { setImageData } = uploadSlice.actions;
export default uploadSlice.reducer;
