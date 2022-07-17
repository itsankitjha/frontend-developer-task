import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requestApi from "config/apiHandler";
import feedsData from "data/feedsData";

const initialState = {
  currentRequestId: undefined,
  loading: "idle",
  error: null,
  token: null,
  feeds: feedsData,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addPost(state, action) {
      state.feeds.unshift(action.payload);
    },
  },
  extraReducers: () => {},
});

// Action creators are generated for each case reducer function
export const { addPost } = feedSlice.actions;
export default feedSlice.reducer;
