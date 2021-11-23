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
      <Chat />
      <div>{isLoading && "Loading ... "}</div>
      <div>{errorMessage}</div>
      <ul>
        {list
          .reverse()
          .slice(0, 9)
          .map((msg) => {
            return <li key={msg._id}>{msg.text}</li>;
          })}
      </ul>
    </div>
  );
}
