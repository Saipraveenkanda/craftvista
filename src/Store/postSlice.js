import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const username = Cookies.get("user");
const newDate = new Date();
const dateObject = `${newDate.getFullYear()}/${
  newDate.getMonth() + 1
}/${newDate.getDate()}`;

export const postSlice = createSlice({
  name: "post",
  initialState: {
    id: nanoid(),
    postText: "",
    imageUrl: null,
    username: username,
    date: dateObject,
    imageUrlLink: "",
    videoUrl: null,
  },
  reducers: {
    setPostText: (state, action) => {
      state.postText = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    setImageUrlLink: (state, action) => {
      state.imageUrlLink = action.payload;
    },
    setVideoUrl: (state, action) => {
      state.videoUrl = action.payload;
    },
  },
});

export const { setPostText, setImageUrl, setImageUrlLink, setVideoUrl } =
  postSlice.actions;
export default postSlice.reducer;
