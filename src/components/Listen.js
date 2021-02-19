import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateContactAction } from "../redux/actions/contactAction";

const Listen = ({ props }) => {
  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);
  const contact = useSelector((state) => state.contact);
  const initMessage = useSelector((state) => state.initMessage);
  const socket = useSelector((state) => state.socket.socket);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const [contactList, setContactList] = useState(contact.list || []);

  useEffect(() => {
    // alert("Listen.js");
    if (!token) return props.history.push("/");
  }, [token]);

  useEffect(() => {
    // console.log(member);
    socket.on("success-invited", () => {
      alert("bạn đã được mời");
    });
  }, [socket]);

  useEffect(() => {
    socket.on("update-room", () => {
      socket.emit("fetch-room", { userId: user.id });
    });
  }, [socket]);

  useEffect(() => {
    socket.on("fetch-room-success", (data) => {
      const { message, room } = data;
      console.log(room);

      //redux
      dispatch(updateContactAction({ list: data.room }));

      //UI
      setContactList(room);
    });
  }, [socket]);

  return <div></div>;
};

export default Listen;
