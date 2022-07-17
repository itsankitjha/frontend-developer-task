/* eslint-disable import/no-named-as-default */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "store/slices/authSlice";
import feedSlice from "store/slices/feedSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    feed: feedSlice,
  },
});

export default store;
