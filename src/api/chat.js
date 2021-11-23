import { io } from "socket.io-client";
import constants from "../constants";
import httpClient, { domain } from "./index";
import store from "../app/store";
import { sendMessageError, sendMessageSuccess } from "../app/actions";

const socket = io(`ws://${domain}`);

export const sendMessage = (msg) => {
  socket.emit(constants.SOCKET.EVENTS.NEW_MESSAGE, msg);
};

socket.on(constants.SOCKET.EVENTS.NEW_MESSAGE, (msg) => {
  console.log(msg);
  /* dispatch action */
  store.dispatch(sendMessageSuccess(msg));
});

socket.on(constants.SOCKET.EVENTS.NEW_MESSAGE_ERROR, (error) => {
  console.log(error);
  /* dispatch error */
  store.dispatch(sendMessageError(error));
});

export const getMessages = async (data) => {
  const response = await httpClient.get("/users/messages");
  return response.data;
};
