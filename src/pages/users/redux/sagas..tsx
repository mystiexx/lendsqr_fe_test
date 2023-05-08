import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  get_users_success,
  get_users_error,
  get_users,
  get_user_success,
  get_user_error,
  get_user,
} from "./reducer";
import api from "../../../services/dataService";
import { AxiosResponse } from "axios";
import { User } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";

type GetUserAction = PayloadAction<string>;

function* getUsersSaga() {
  try {
    const request: AxiosResponse = yield call(api.get, "/users");
    const response: any = request.data;
    yield put({
      type: get_users_success.type,
      payload: response,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: get_users_error.type,
    });
  }
}

function* getUserSaga({ payload }: GetUserAction) {
  try {
    const request: AxiosResponse<User> = yield call(
      api.get,
      `/users/${payload}`
    );
    const response: any = request.data;
    yield put({
      type: get_user_success.type,
      payload: response,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: get_user_error.type,
    });
  }
}

function* usersSagas() {
  yield takeEvery(get_users.type, getUsersSaga);
  yield takeEvery<GetUserAction>(get_user.type, getUserSaga);
}

export default usersSagas;
