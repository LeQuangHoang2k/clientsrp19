import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";

import Avatar from "../../img/avatar.jpg";

function No6Body(props) {
  const envURL = useSelector((state) => state.env.URL);
  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);
  const initMessage = useSelector((state) => state.initMessage);
  const dispatch = useDispatch();

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    //auto fetch message
    if (currentContact.id === "default") return;

    Axios.post(`${envURL}/auto/list-message`, {
      myInfo: user,
      myContact: currentContact,
    })
      .catch((err) => {
        if (err) return alert("No6Body log :" + err);
      })
      .then((res) => {
        if (res.data.error) return alert("No6Body log :" + res.data.error);
        const { listMessage } = res.data;

        //redux

        //UI
        setMessageList(listMessage);
      });
  }, [user.id, currentContact.id]);

  useEffect(() => {
    if (initMessage.messageLast !== []) {
      setMessageList((messageList) => [
        ...messageList,
        initMessage.messageLast,
      ]);
    }
  }, [initMessage.messageLast]);

  return (
    <div className="no6__body">
      {messageList.map((message, index) => {
        if (!message.message) return;
        if (user.id !== message.senderId) {
          return (
            <div className="no6__another" key={index}>
              <section className="no6__another">{message.senderName}</section>
              <img className="no6__another" src={Avatar} alt="Loi" />
              <p className="no6__another">
                <b className="no6__another">{message.message}</b>
              </p>
            </div>
          );
        }
        return (
          <div className="no6__me" key={index}>
            <img src={Avatar} alt="loi" className="no6__me" />
            <p className="no6__me">
              <b className="no6__me">{message.message}</b>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default No6Body;
