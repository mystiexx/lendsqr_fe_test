import { put, takeEvery, call } from "@redux-saga/core/effects";
import { get_users_success, get_users_error, get_users } from "./reducer";
import api from "../../../services/dataService";
import { AxiosResponse } from "axios";

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

function* usersSagas() {
  yield takeEvery(get_users.type, getUsersSaga);
}

export default usersSagas;
