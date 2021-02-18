import React, { useState } from "react";
import { Col, Collapse, Row } from "react-bootstrap";
import No7SubCalendar from "./No7SubCalendar";

import timerImage from "../../img/timer.png";

function No7Calendar(props) {
  const [open, setOpen] = useState(false);

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
