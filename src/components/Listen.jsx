import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateContactAction } from "../redux/actions/contactAction";
import { addMessageAction } from "../redux/actions/initMessageAction";
import { calendarUpdateAction } from "../redux/actions/calendarAction";

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
    if (!token) return props.history.push("/");
  }, [token]);

  useEffect(() => {
    socket.on("success-invited", () => {
      alert("bạn đã được mời");
    });
  }, [socket]);

  useEffect(() => {
    socket.on("update-room", () => {
      socket.emit("fetch-room", { userId: user.id });
    });
  }, [socket]);

  const handleRingCalendar = (listCalendar) => {
    listCalendar.forEach((item)=>{
      console.log(item);
    })
  };

  useEffect(() => {
    socket.on("fetch-room-success", (data) => {
      const { message, room, listCalendar } = data;

      handleRingCalendar(listCalendar);

      //redux
      dispatch(updateContactAction({ list: data.room }));

      //UI
      setContactList(room);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("response-message", async ({ lastMessage }) => {
      // console.log(lastMessage);

      //redux
      await dispatch(
        addMessageAction({
          lastMessage,
        })
      );
    });
    // }, [initMessage.list, contact.list, socket, dispatch]);
  }, [socket]);

  useEffect(() => {
    socket.on("fetch-calendar-success", async ({ calendarFetch }) => {
      alert("fetch-calendar-success");

      //redux
      await dispatch(calendarUpdateAction({ list: calendarFetch }));
    });
  }, [socket]);

  return <div></div>;
};

export default Listen;
