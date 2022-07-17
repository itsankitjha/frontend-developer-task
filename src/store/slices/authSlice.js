import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import requestApi from "config/apiHandler";

export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async (requestData, { getState, requestId, rejectWithValue }) => {
    const { currentRequestId, loading } = getState().auth;
    if (loading !== "pending" || requestId !== currentRequestId) {
      return null;
    }
    try {
      const response = await requestApi("/verifyUser", "POST", requestData);
      if (response.code === "success") {
        return response;
      }
      return rejectWithValue(response.message);
    } catch (err) {
      alert(err);
      throw err;
    }
  }
);

const initialState = {
  currentRequestId: undefined,
  loading: "idle",
  error: null,
  token: null,
  userData: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData(state, action) {
      const data = action.payload;
      state.userData = {
        ...current(state.userData),
        ...data,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyUser.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === "pending" && state.currentRequestId === requestId) {
          state.loading = "idle";
          state.token = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(verifyUser.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === "pending" && state.currentRequestId === requestId) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here. action.payload.errorMessage
          state.error = action.payload ? action.payload : action.error.message;
          state.currentRequestId = undefined;
          state.loading = "idle";
        }
      });
  },
});

// Action creators are generated for each case reducer function
export const { setUserData } = authSlice.actions;
export default authSlice.reducer;
