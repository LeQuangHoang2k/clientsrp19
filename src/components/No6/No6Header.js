import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Avatar from "../../img/avatar.jpg";

function No6Header(props) {
  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);

  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (currentContact.name !== "default") return setDisplay("");
    setDisplay("none");
  }, [currentContact.name]);

  return (
    <div className="no6__header">
      <div className="no6__logo" style={{ display: display }}>
        <img src={Avatar} alt="Loi" className="no6__logo" />
        <p className="no6__group">{currentContact.name} </p>
      </div>
    </div>
  );
}

export default No6Header;
