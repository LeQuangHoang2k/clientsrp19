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
  // const dispatch = useDispatch();

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
  }, [user, currentContact, envURL]);

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
      {messageList.map((item, index) => {
        console.log("51", item);
        if (!item.message) return;
        if (user.id !== item.senderId._id) {
          return (
            <div className="no6__another" key={index}>
              <section className="no6__another">{item.senderId.name}</section>
              <img className="no6__another" src={Avatar} alt="Loi" />
              <p className="no6__another">
                <b className="no6__another">{item.message}</b>
              </p>
            </div>
          );
        }
        return (
          <div className="no6__me" key={index}>
            <img src={Avatar} alt="loi" className="no6__me" />
            <p className="no6__me">
              <b className="no6__me">{item.message}</b>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default No6Body;
