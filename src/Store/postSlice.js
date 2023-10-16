import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const username = Cookies.get("user");
const newDate = new Date();
const dateObject = `${newDate.getFullYear()}/${
  newDate.getMonth() + 1
}/${newDate.getDate()}`;
console.log(dateObject);

export const postSlice = createSlice({
  name: "post",
  initialState: {
    id: nanoid(),
    postText: "",
    imageUrl: "",
    username: username,
    date: dateObject,
  },
  reducers: {
    setPostText: (state, action) => {
      state.postText = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setPostText, setImageUrl, setPostUserName } = postSlice.actions;
export default postSlice.reducer;
