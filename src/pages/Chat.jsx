import React, { useLayoutEffect, useMemo } from "react";

import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import Chat from "../components/ChatForm";
import * as actionCreators from "../app/actions";

export default function ChatPage() {
  const { list, isLoading, errorMessage } = useSelector(
    (state) => state.chatSlice
  );

  const dispatch = useDispatch();

  const { getMessagesRequest } = useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch]
  );

  // TODO difference
  useLayoutEffect(() => {
    getMessagesRequest();
  }, [getMessagesRequest]);

  return (
    <div>
      <div>{isLoading && "Loading ... "}</div>
      <div>{errorMessage}</div>
      <ul>
        {list.slice(0, 9).reverse().map((msg) => {
          return <li key={msg._id}>{msg.author.firstName} says:{msg.text}</li>;
        })}
      </ul>
      <Chat />
    </div>
  );
}
