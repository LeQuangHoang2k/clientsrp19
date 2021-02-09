import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessageAction } from "../../redux/actions/initMessageAction";
import No6Body from "./No6Body";

function Empty(props) {
  const socket = useSelector((state) => state.socket.socket);
  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);
  const contact = useSelector((state) => state.contact);
  const initMessage = useSelector((state) => state.initMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    // return;
    socket.on("response-message", async ({ lastMessage, error }) => {
      if (error) return alert(error);

      console.log(lastMessage);
      //redux
      await dispatch(
        addMessageAction({
          lastMessage,
        })
      );

      // await dispatch(updateContactAction({ preLastMessage, lastMessage }));
    });
  }, [initMessage.list, contact.list, socket, dispatch]);
  return (
    <div className="no6">
      <div className="no6__header">
        <div className="no6__logo"></div>
      </div>
      <div className="no6__body"></div>
    </div>
  );
}

export default Empty;
