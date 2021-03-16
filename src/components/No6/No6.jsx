import React from "react";

import "../../styles/no6/no6.css";
import "../../styles/no6/no6Logo.css";
import "../../styles/no6/no6Group.css";
import "../../styles/no6/no6Header.css";
import "../../styles/no6/no6Body.css";
import "../../styles/no6/no6Another.css";
import "../../styles/no6/no6Me.css";
import "../../styles/no6/no6Footer.css";
import "../../styles/no6/no6More.css";
import "../../styles/no6/no6Timer.css";

import No6Header from "./No6Header";
import No6Body from "./No6Body";
import No6Footer from "./No6Footer";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import Empty from "./Empty";

function No6(props) {
  const currentContact = useSelector((state) => state.currentContact);
  const socket = useSelector((state) => state.socket.socket);

  // useEffect(() => {
  //   socket.on("create-calendar-success", () => {
  //     alert("no6.js ok");
  //   });
  // }, [socket]);

  if (currentContact.name === "default") return <Empty />;

  return (
    <div className="no6">
      <No6Header />
      <No6Body />
      <No6Footer />
    </div>
  );
}

export default No6;
