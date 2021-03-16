import React from "react";
// import { useSelector } from "react-redux";

const ButtonSubFeatures = () => {
  // const user = useSelector((state) => state.user);
  // const currentContact = useSelector((state) => state.currentContact);
  // const contact = useSelector((state) => state.contact);
  // const initMessage = useSelector((state) => state.initMessage);
  // const socket = useSelector((state) => state.socket.socket);

  const open = () => {
    alert("or");
  };

  return (
    <div>
      <button type="button" className="no6__more" onClick={open}>
        +
      </button>
    </div>
  );
};

export default ButtonSubFeatures;
