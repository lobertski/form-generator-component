/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest } from "redux-saga/effects";
import { postFormAPI } from "../../services";
import {
  submitFormError,
  submitFormRequest,
  submitFormSuccess,
} from "../slices/formSlice";

function* submitFormSage(action): Generator<any, any, any> {
  try {
    const response = yield call(postFormAPI, action.payload);
    yield put(submitFormSuccess(response.data));
  } catch (error: any) {
    yield put(submitFormError(error.message));
  }
}

export function* formSaga() {
  yield takeLatest(submitFormRequest.type, submitFormSage);
}
