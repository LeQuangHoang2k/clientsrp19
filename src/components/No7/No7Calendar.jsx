import React, { useEffect, useState } from "react";
import { Col, Collapse, Row } from "react-bootstrap";
import No7SubCalendar from "./No7SubCalendar";

import timerImage from "../../img/timer.png";
import { useSelector } from "react-redux";

function No7Calendar(props) {
  // const { display } = props;
  const socket = useSelector((state) => state.socket.socket);
  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);
  const calendar = useSelector((state) => state.calendar);

  const [open, setOpen] = useState(false);
  const [listCalendar, setListCalendar] = useState(calendar.list);

  const handleLoadCalendar = () => {
    socket.emit("fetch-calendar", { user, currentContact });
  };

  useEffect(() => {
    if (!open) return;

    handleLoadCalendar();
  }, [open]);

  useEffect(() => {
    setListCalendar(calendar.list);
  }, [calendar.list]);

  return (
    <div>
      <Row>
        <Col>
          <div
            className="no7__listCalendar"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            size="lg">
            <img src={timerImage} className="no7__listCalendar" alt="timer" />
            &nbsp; List reminder
          </div>
        </Col>
      </Row>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {listCalendar.map((item) => {
            console.log(item);
            return <No7SubCalendar key={item._id} item={item} />;
          })}
        </div>
      </Collapse>
    </div>
  );
}

export default No7Calendar;
