import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import { addMessageAction } from "../../redux/actions/initMessageAction";
import ButtonSubFeatures from "./ButtonSubFeatures";
import ButtonCalendar from "./Calendar/ButtonCalendar";

function No6Footer(props) {
  // const envURL = useSelector((state) => state.env.URL);
  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);
  // const contact = useSelector((state) => state.contact);
  // const initMessage = useSelector((state) => state.initMessage);
  const socket = useSelector((state) => state.socket.socket);
  // const dispatch = useDispatch();

  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("");
  }, [user.id, currentContact.id]);

  const Chat = (e) => {
    e.preventDefault();

    //check input
    if (currentContact.name === "default" || message.length < 1)
      return alert("Bạn không được để nội dung trống");

    socket.emit("send-message", {
      message,
      myInfo: { id: user.id, email: user.email, name: user.name },
      myContact: { id: currentContact.id, name: currentContact.name },
    });

    //UI
    setMessage("");
  };

  return (
    <div className="element">
      <form className="no6__footer" onSubmit={Chat}>
        <ButtonSubFeatures />
        <ButtonCalendar />

        <button type="button" className="no6__feature">
          ?
        </button>
        <button type="button" className="no6__feature">
          ?
        </button>
        <input
          className="no6__footer"
          id="no6__footer__input1"
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="no6__footer fas fa-angle-double-up"></button>
      </form>
    </div>
  );
}

export default No6Footer;
