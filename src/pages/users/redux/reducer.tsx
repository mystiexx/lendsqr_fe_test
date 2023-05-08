import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";

const initialState = {
  ui: {
    loading: false,
  },
  data: [],
  names: [],
  user: {},
};

export const userReducerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    get_users_success: (state, { payload }) => {
      state.ui.loading = false;
      state.data = payload;
      state.names = payload.map((data: User) => data.orgName);
    },
    get_users_error: (state) => {
      state.ui.loading = false;
    },
    get_users: (state) => {
      state.ui.loading = true;
    },
    get_user_success: (state, { payload }: PayloadAction<User>) => {
      state.ui.loading = false;
      state.user = payload;
    },
    get_user_error: (state) => {
      state.ui.loading = false;
    },
    get_user: (state, { payload }: PayloadAction<string>) => {
      state.ui.loading = true;
    },
  },
});

export const {
  get_users_success,
  get_users_error,
  get_users,
  get_user_success,
  get_user_error,
  get_user,
} = userReducerSlice.actions;

export default userReducerSlice.reducer;
