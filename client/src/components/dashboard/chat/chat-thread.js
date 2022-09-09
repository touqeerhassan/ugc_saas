import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Divider } from "@mui/material";
import {
  addMessage,
  getThread,
  markThreadAsSeen,
  setActiveThread,
  messageReceived,
} from "../../../slices/chat";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbar } from "../../scrollbar";
import { ChatMessageAdd } from "./chat-message-add";
import { ChatMessages } from "./chat-messages";
import { ChatThreadToolbar } from "./chat-thread-toolbar";
import { chatApi } from "../../../__fake-api__/chat-api";
import { useAuth } from "../../../hooks/use-auth";
import { SOCKET_ENDPOINT } from "../../../config";

import io from "socket.io-client";
let socket;

const threadSelector = (state) => {
  const { threads, activeThreadId } = state.chat;

  return threads.byId[activeThreadId];
};

export const ChatThread = (props) => {
  const { threadKey } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const thread = useSelector((state) => threadSelector(state));
  const messagesRef = useRef(null);
  const [participants, setParticipants] = useState([]);
  const auth = useAuth();
  // To get the user from the authContext, you can use
  const { user } = useAuth();
  // const user = {
  //   id: "5e86809283e28b96d2d38537",
  // };

  //Socket related
  const [socketConnected, setSocketConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const getDetails = async () => {
    try {
      // console.log("Inside chat thread");
      // console.log("threadKey", threadKey);
      // console.log("user", auth?.user);
      const _participants = await chatApi.getParticipants(
        auth?.user?.userData?._id,
        threadKey
      );

      setParticipants(_participants);

      const threadId = await dispatch(
        getThread(auth?.user?.userData?._id, threadKey)
      );

      dispatch(setActiveThread(threadId));
      dispatch(markThreadAsSeen(threadId));
      socket.emit("join chat", thread._id);
    } catch (err) {
      // If thread key is not a valid key (thread id or contact id)
      // the server throws an error, this means that the user tried a shady route
      // and we redirect them on the home view
      console.error(err);
      // router.push(`/dashboard/chat`);
    }
  };

  useEffect(() => {
    socket = io(SOCKET_ENDPOINT);
    socket.emit("setup", user?.userData);
    socket.on("connected", () => {
      console.log("Connected");
      setSocketConnected(true);
    });
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
    socket.on("message received", ({ threadId, message }) => {
      dispatch(messageReceived({ threadId, message }));
    });
    return function cleanup() {
      socket.disconnect();
    };
    // socket.on("typing", () => setIsTyping(true));
    // socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, [threadKey]);

  useEffect(
    () => {
      getDetails();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [threadKey]
  );

  useEffect(() => {
    // Scroll to bottom of the messages after loading the thread
    if (thread?.messages && messagesRef?.current) {
      const scrollElement = messagesRef.current.getScrollElement();

      scrollElement.scrollTop = messagesRef.current.el.scrollHeight;
    }
  }, [thread]);

  // If we have the thread, we use its ID to add a new message
  // Otherwise we use the recipients IDs. When using participant IDs, it means that we have to
  // get the thread.
  const handleSendMessage = async (body) => {
    try {
      if (thread) {
        const { message } = await dispatch(
          addMessage({
            id: user?.userData?._id,
            threadId: thread._id,
            body,
          })
        );
        console.log("Message", message);
        socket.emit("new message", { message, threadId: thread._id });
      } else {
        // console.log("Inside chat thread");
        // const recipientIds = participants
        //   .filter((participant) => participant._id != user?.userData?._id)
        //   .map((participant) => participant._id);

        const recipientIds = [threadKey];

        const { message, threadId } = await dispatch(
          addMessage({
            id: user?.userData?._id,
            recipientIds,
            body,
          })
        );
        console.log("Message", message);
        socket.emit("new message", { message, threadId });

        await dispatch(getThread(user?.userData?._id, threadId));
        dispatch(setActiveThread(threadId));
      }

      // Scroll to bottom of the messages after adding the new message
      if (messagesRef?.current) {
        const scrollElement = messagesRef.current.getScrollElement();

        scrollElement.scrollTo({
          top: messagesRef.current.el.scrollHeight,
          behavior: "smooth",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflow: "hidden",
      }}
      {...props}
    >
      <ChatThreadToolbar participants={participants} />
      <Box
        sx={{
          backgroundColor: "background.default",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <Scrollbar ref={messagesRef} sx={{ maxHeight: "100%" }}>
          <ChatMessages
            messages={thread?.messages || []}
            participants={thread?.participants || []}
          />
        </Scrollbar>
      </Box>
      <Divider />
      <ChatMessageAdd disabled={false} onSend={handleSendMessage} />
    </Box>
  );
};

ChatThread.propTypes = {
  threadKey: PropTypes.string.isRequired,
};
