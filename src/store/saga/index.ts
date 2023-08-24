import { all, fork } from "redux-saga/effects";
import { formSaga } from "./formSaga";

export default function* rootSaga() {
  yield all([fork(formSaga)]);
}
