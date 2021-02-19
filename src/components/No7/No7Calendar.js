import React, { useEffect, useState } from "react";
import { Col, Collapse, Row } from "react-bootstrap";
import No7SubCalendar from "./No7SubCalendar";

import timerImage from "../../img/timer.png";
import { useSelector } from "react-redux";

function No7Calendar(props) {
  const socket = useSelector((state) => state.socket.socket);
  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return alert("chua mo calendar");
    alert("dang mo calendar");

    socket.emit("fetch-calendar");
  }, [open]);

  useEffect(() => {
    socket.on("create-calendar-success", () => {
      alert("helo");
    });
  }, [socket]);

  return (
    <div>
      <Row>
        <Col>
          <div
            className="no7__listCalendar"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            size="lg"
            block
            fluid>
            <img src={timerImage} className="no7__listCalendar" alt="timer" />
            &nbsp; List reminder
          </div>
        </Col>
      </Row>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, key) => {
            return <No7SubCalendar key={key} item={item} />;
          })}
        </div>
      </Collapse>
    </div>
  );
}

export default No7Calendar;
