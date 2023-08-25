/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest } from "redux-saga/effects";
import { postFormAPI } from "../../services";
import {
  submitFormError,
  submitFormRequest,
  submitFormSuccess,
} from "../slices/formSlice";

function* submitFormSage(
  action: Record<string, any>
): Generator<any, any, any> {
  try {
    yield call(postFormAPI, action.payload);
    yield put(submitFormSuccess());
  } catch (error: any) {
    yield put(submitFormError(error.message));
  }
}

export function* formSaga() {
  yield takeLatest(submitFormRequest.type, submitFormSage);
}
