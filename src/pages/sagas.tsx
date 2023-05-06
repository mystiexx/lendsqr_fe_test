import { all } from "redux-saga/effects";
import usersSagas from "./users/redux/sagas.";

export default function* root() {
  yield all([usersSagas()]);
}
