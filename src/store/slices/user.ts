import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
let user: any;
let token: any;

if (typeof window !== "undefined") {
  // Perform localStorage action
  user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;
  token = localStorage.getItem("token");
}

interface initialStateType {
  user: any;
  token: any;
}

const initialState: initialStateType = {
  user, // for user object
  token,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
  },
});
export const { logout, login } = userSlice.actions;
// export const selectUser = (state: { user: any }) => state.user;

export default userSlice.reducer;
