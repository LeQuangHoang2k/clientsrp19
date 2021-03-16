import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import No7Calendar from "./No7Calendar";

import "../../styles/no7/no7.css";
import "../../styles/no7/no7ListCalendar.css";
import "../../styles/no7/no7SubCalendar.css";

function No7() {
  const currentContact = useSelector((state) => state.currentContact);
  const calendar = useSelector((state) => state.calendar);

  let [display, setDisplay] = useState(false);

  useEffect(() => {
    if (currentContact.name === "default") return;

    setDisplay(true);
  }, [currentContact, calendar]);

  if (display === false) return <div className="no7">Nothing...</div>;

  return (
    <div className="no7">
      <No7Calendar />
    </div>
  );
}

export default No7;
