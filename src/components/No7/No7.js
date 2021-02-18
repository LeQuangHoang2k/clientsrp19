import React, { useState } from "react";
import { useSelector } from "react-redux";
import No7Calendar from "./No7Calendar";

import "../../styles/no7/no7.css";
import "../../styles/no7/no7ListCalendar.css";
import "../../styles/no7/no7SubCalendar.css";

function No7() {
  const currentContact = useSelector((state) => state.currentContact);

  if (currentContact.name === "default") return <div className="no7"></div>;

  return (
    <div className="no7">
      <No7Calendar />
    </div>
  );
}

export default No7;
