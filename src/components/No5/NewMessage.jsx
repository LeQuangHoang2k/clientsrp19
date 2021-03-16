import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function NewMessage(props) {
  const { lastMessage } = props;
  const [name, setName] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [fullMessage, setFullMessage] = useState("");

  useEffect(() => {
    // console.log(lastMessage);
    if (!lastMessage || !lastMessage.lastMessageId) return;
    // console.log(lastMessage.lastMessageId.senderId.name);
    setName(lastMessage.lastMessageId.senderId.name);
    setNewMessage(lastMessage.lastMessageId.message);
    setFullMessage(
      lastMessage.lastMessageId.senderId.name +
        ": " +
        lastMessage.lastMessageId.message
    );
  }, [lastMessage]);

  return (
    <div>
      <p className="no5__news">{fullMessage}</p>
    </div>
  );
}

export default NewMessage;
