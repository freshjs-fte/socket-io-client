import { takeLatest, put } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes";
import * as actionCreators from "../actions";
import { getMessages, sendMessage } from "../../api/chat";

export function* chatWatcherSaga() {
  yield takeLatest(ACTION_TYPES.GET_MESSAGES_REQUEST, getMessagesSaga);
  yield takeLatest(ACTION_TYPES.SEND_MESSAGE_REQUEST, sendMessageSaga);
}

function* getMessagesSaga(action) {
  try {
    const messages = yield getMessages(action.payload);

    yield put(actionCreators.getMessagesSuccess(messages));
  } catch (error) {
    yield put(actionCreators.getMessagesError(error));
  }
}

function* sendMessageSaga(action) {
  /* try { */

    yield sendMessage(action.payload);
    
  /* } catch (error) {
    yield put(actionCreators.getMessagesError(error));
  } */
}
