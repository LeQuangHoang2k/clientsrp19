import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import "../../styles/no10/ButtonChat.css";
import chatImg from "../../img/chat.png";

function ButtonChat(props) {
  const { offerId } = props;
  const envURL = useSelector((state) => state.env.URL);
  const user = useSelector((state) => state.user);
  const socket = useSelector((state) => state.socket.socket);
  const dispatch = useDispatch();

  const createRoom = () => {
    alert("offer la" + offerId);
    socket.emit("add-room", { user, offerId });
  };

  return (
    <button className="no10 chat" type="submit" onClick={createRoom}>
      <img className="no10 chat" src={chatImg} alt="error" />
    </button>
  );
}

export default withRouter(ButtonChat);
