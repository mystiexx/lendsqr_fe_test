import { createSelector } from "@reduxjs/toolkit";

interface UserDataState {
  data: [];
  names: [];
  user: null;
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

export const getOrgNames = createSelector(
  userData,
  (userData) => userData.names
);

export const getUser = createSelector(userData, (userData) => userData.user);
