import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import "../../styles/no10/ButtonChat.css";
import chatImg from "../../img/chat.png";

function ButtonChat(props) {
  const { offerId } = props;
  const user = useSelector((state) => state.user);
  const envURL = useSelector((state) => state.env.URL);
  const dispatch = useDispatch();

  const toChat = () => {
    alert(offerId);
    Axios.post(`${envURL}/user/contact-user`, { userId: user.id, offerId })
      .catch((err) => {
        if (err) return alert("lỗi : " + err);
      })
      .then((res) => {
        if (res.data.error) return alert(res.data.error);
        alert("Liên hệ thành công");

        //redux

        //UI

        props.history.push("/chat");
      });
  };

  return (
    <button className="no10 chat" type="submit" onClick={toChat}>
      <img className="no10 chat" src={chatImg} alt="error" />
    </button>
  );
}

export default withRouter(ButtonChat);
