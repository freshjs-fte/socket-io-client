import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { chatWatcherSaga } from "./chat.sagas";
import { userWatcherSaga } from "./user.sagas";

export const sagaMW = createSagaMiddleware();

export default function* rootSaga() {

  yield all([chatWatcherSaga(), userWatcherSaga()]);
}
