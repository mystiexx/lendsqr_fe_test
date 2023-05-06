import { createSlice } from "@reduxjs/toolkit";
import { User } from "./types";

const initialState = {
  ui: {
    loading: false,
  },
  data: [],
  loan: [],
  savings: [],
};

export const userReducerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    get_users_success: (state, { payload }) => {
      state.ui.loading = false;
      state.data = payload;
      state.loan = payload.filter((data: User) => {
        if (data?.education?.loanRepayment) {
          return {
            ...data,
          };
        }
      });
      state.savings = payload.filter((data: User) => {
        if (data?.accountBalance) {
          return {
            ...data,
          };
        }
      });
    },
    get_users_error: (state) => {
      state.ui.loading = false;
    },
    get_users: (state) => {
      state.ui.loading = true;
    },
  },
});

export const { get_users_success, get_users_error, get_users } =
  userReducerSlice.actions;

export default userReducerSlice.reducer;
