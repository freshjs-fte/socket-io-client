import ACTION_TYPES from "./actionTypes";

export const sendMessageRequest = (message) => ({
  type: ACTION_TYPES.SEND_MESSAGE_REQUEST,
  payload: message,
});

export const sendMessageError = (error) => ({
  type: ACTION_TYPES.SEND_MESSAGE_ERROR,
  payload: { error },
});

export const sendMessageSuccess = (message) => ({
  type: ACTION_TYPES.SEND_MESSAGE_SUCCESS,
  payload: message,
});

export const getMessagesRequest = (payload) => ({
  type: ACTION_TYPES.GET_MESSAGES_REQUEST,
  payload,
});

export const getMessagesError = (error) => ({
  type: ACTION_TYPES.GET_MESSAGES_ERROR,
  payload: { error },
});

export const getMessagesSuccess = (messages) => ({
  type: ACTION_TYPES.GET_MESSAGES_SUCCESS,
  payload: messages,
});
