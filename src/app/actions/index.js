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

export const getUserRequest = (data) => ({
  type: ACTION_TYPES.GET_USER_REQUEST,
  payload: data,
});

export const loginUserRequest = (data) => ({
  type: ACTION_TYPES.LOGIN_REQUEST,
  payload: data,
});

export const registerUserRequest = (data) => ({
  type: ACTION_TYPES.REGISTER_REQUEST,
  payload: data,
});

export const getUserSuccess = (data) => ({
  type: ACTION_TYPES.GET_USER_SUCCESS,
  payload: data,
});

export const loginUserSuccess = (data) => ({
  type: ACTION_TYPES.LOGIN_SUCCESS,
  payload: data,
});

export const registerUserSuccess = (data) => ({
  type: ACTION_TYPES.REGISTER_SUCCESS,
  payload: data,
});

export const getUserError = (error) => ({
  type: ACTION_TYPES.GET_USER_ERROR,
  payload: { error },
});

export const loginUserError = (error) => ({
  type: ACTION_TYPES.LOGIN_ERROR,
  payload: { error },
});

export const registerUserError = (error) => ({
  type: ACTION_TYPES.REGISTER_ERROR,
  payload: { error },
});
