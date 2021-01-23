import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { currentContactAction } from "../../redux/actions/currentContactAction";
import { updateContactAction } from "../../redux/actions/contactAction";

import Avatar from "../../img/avatar.jpg";
import InputRoom from "./InputRoom";
import Name from "./Name";
import NewMessage from "./NewMessage";

function No5Body(props) {
  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);
  const contact = useSelector((state) => state.contact);
  const initMessage = useSelector((state) => state.initMessage);
  const socket = useSelector((state) => state.socket.socket);
  const dispatch = useDispatch();

  const [contactList, setContactList] = useState(contact.list || []);
  let [name, setName] = useState("");
  const [idActive, setIdActive] = useState("")

  useEffect(() => {
    socket.emit("join-my-id", { userId: user.id });
    socket.emit("list-contact", { userId: user.id });
    socket.on("list-contact-success", (data) => {
      const { message, room } = data;
      // alert("online success" + message);
      console.log(room);

      //redux
      dispatch(updateContactAction({ list: data.room }));

      //UI
      setContactList(room);
    });
  }, [socket, initMessage.messageLast]);

  const openChat = (id, contactList, nameOfGroup) => {
    alert(id);

    //input
    if (!id) return alert("ko có id và name");

    if (contactList.length === 2) {
      console.log(contactList[0]._id, user.id);
      contactList[0]._id === user.id
        ? (name = contactList[1].name)
        : (name = contactList[0].name);
    } else {
      name = nameOfGroup;
    }

    //redux
    dispatch(currentContactAction({ id: id, name }));

    //UI-ignore
    setIdActive(id)
  };

  return (
    <div className="no5__body">
      {/* <div className="no5__contact">
        <div className="no5__avatar">
          <img className="no5__avatar" src={Avatar} alt="Loi" />
        </div>
        <p className="no5__name">Test</p>
        <p className="no5__news">
          {initMessage.lastSender} : {initMessage.lastMessage}
        </p>
      </div> */}
      <InputRoom />
      {contactList.map((item, index) => {
        return (
          <div
            className={item._id===idActive?"no5__contact no5__active":"no5__contact"}
            key={index}
            onClick={() => {
              openChat(item._id, item.memberIds, item.name);
            }}>
            <div className="no5__avatar">
              <img className="no5__avatar" src={Avatar} alt="Loi" />
            </div>
            <Name
              _id={item._id}
              contactList={item.memberIds}
              nameOfGroup={item.name}
            />
            <NewMessage lastMessage={item} />
          </div>
        );
      })}
      {/* {contactList.map((contacts, index) => {
        let myContact;
        //
        contacts.receiverId._id !== user.id
          ? (myContact = contacts.receiverId) //chat 2 person
          : (myContact = contacts.contactId); //chat 1 person
        //
        let newMessage;
        contacts.lastMessageId
          ? (newMessage = contacts.lastMessageId.message)
          : (newMessage = "");
        return (
          <div
            className={
              myContact._id === currentContact.id
                ? "no5__contact no5__active"
                : "no5__contact"
            }
            key={index}
            onClick={() => {
              openChat(myContact._id, myContact.name);
            }}>
            <div className="no5__avatar">
              <img className="no5__avatar" src={Avatar} alt="Loi" />
            </div>
            <p
              className={
                myContact._id === currentContact.id
                  ? "no5__name no5__active"
                  : "no5__name"
              }>
              {myContact.name}
            </p>
            <p
              className={
                myContact._id === currentContact.id
                  ? "no5__news no5__active"
                  : "no5__news"
              }>
              {contacts.lastMessageId
                ? contacts.lastMessageId.senderId.name + ": " + newMessage
                : ""}
            </p>
          </div>
        );
      })} */}
      {/* <div className="no5__contact no5__unactive">
        <div className="no5__avatar">
          <img className="no5__avatar" src={Avatar} alt="Loi" />
        </div>
        <div className="no5__news">99+</div>
        <p className="no5__name no5__unactive">18DTHQA2</p>
        <p className="no5__news no5__unactive">
          GM: alo hoàng ơi tối nay 8h có mặt nhé
        </p>
      </div>
      <div className="no5__contact no5__active">
        <div className="no5__avatar">
          <img className="no5__avatar" src={Avatar} alt="Loi" />
        </div>
        <p className="no5__name">Crim</p>
        <p className="no5__news">GM: alo hoàng ơi tối nay 8h có mặt nhé</p>
      </div>
      <div className="no5__contact">
        <div className="no5__avatar">
          <img className="no5__avatar" src={Avatar} alt="Loi" />
        </div>
        <p className="no5__name">Crim</p>
        <p className="no5__news">GM: alo hoàng ơi tối nay 8h có mặt nhé</p>
      </div>
      <div className="no5__contact">
        <div className="no5__avatar">
          <img className="no5__avatar" src={Avatar} alt="Loi" />
        </div>
        <p className="no5__name">Crim</p>
        <p className="no5__news">GM: alo hoàng ơi tối nay 8h có mặt nhé</p>
      </div>
      <div className="no5__contact">
        <div className="no5__avatar">
          <img className="no5__avatar" src={Avatar} alt="Loi" />
        </div>
        <p className="no5__name">Crim</p>
        <p className="no5__news">GM: alo hoàng ơi tối nay 8h có mặt nhé</p>
      </div>
      <div className="no5__contact">
        <div className="no5__avatar">
          <img className="no5__avatar" src={Avatar} alt="Loi" />
        </div>
        <p className="no5__name">Crim</p>
        <p className="no5__news">GM: alo hoàng ơi tối nay 8h có mặt nhé</p>
      </div>
      <div className="no5__contact">
        <div className="no5__avatar">
          <img className="no5__avatar" src={Avatar} alt="Loi" />
        </div>
        <p className="no5__name">Crim</p>
        <p className="no5__news">GM: alo hoàng ơi tối nay 8h có mặt nhé</p>
      </div>
      <div className="no5__contact">
        <div className="no5__avatar">
          <img className="no5__avatar" src={Avatar} alt="Loi" />
        </div>
        <p className="no5__name">Crim</p>
        <p className="no5__news">GM: alo hoàng ơi tối nay 8h có mặt nhé</p>
      </div> */}
    </div>
  );
}

export default No5Body;
