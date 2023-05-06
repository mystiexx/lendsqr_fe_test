import { createSelector } from "@reduxjs/toolkit";

interface UserDataState {
  data: [];
  loan: [];
  savings: [];
  ui: {
    loading: boolean;
  };
}

interface RootState {
  users: UserDataState;
}

const userData = (state: RootState): UserDataState => state.users;

export const getUsers = createSelector(userData, (userData) => userData.data);

export const getLoading = createSelector(
  userData,
  (userData) => userData.ui.loading
);

export const getLoans = createSelector(userData, (userData) => userData.loan);
export const getSavings = createSelector(
  userData,
  (userData) => userData.savings
);
