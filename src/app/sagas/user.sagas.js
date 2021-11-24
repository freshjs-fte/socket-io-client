import { takeLatest, put } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes";
import * as actionCreators from "../actions";
import {loginRequest, registerRequest} from "../../api/auth";
import { getUserRequest } from "../../api/user";

export function* userWatcherSaga() {
  yield takeLatest(ACTION_TYPES.GET_USER_REQUEST, getUserSaga);
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, loginUserSaga);
  yield takeLatest(ACTION_TYPES.REGISTER_REQUEST, registerUserSaga);
}




export function* getUserSaga(action) {
  try {
    const data = yield getUserRequest(action.payload);

    yield put(actionCreators.getUserSuccess(data));
  } catch (error) {
    yield put(actionCreators.getUserError(error));
  }
}




export function* loginUserSaga(action) {
  try {
    const data = yield loginRequest(action.payload);

    yield put(actionCreators.loginUserSuccess(data));
  } catch (error) {
    yield put(actionCreators.loginUserError(error));
  }
}




export function* registerUserSaga(action) {
  try {
    const data = yield registerRequest(action.payload);

    yield put(actionCreators.registerUserSuccess(data));
  } catch (error) {
    yield put(actionCreators.registerUserError(error));
  }
}
