import React from "react";
import { useState } from "react";

import { Button, Modal } from "react-bootstrap";

import timerImage from "../../../img/timer.png";
import FormTimer from "./FormTimer";

function ButtonTimer(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="">
      <Button bsPrefix="custom" variant="no6__timer" onClick={handleShow}>
        <img src={timerImage} className="no6__timer" alt="timer" />
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Timer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormTimer show={show} setShow={setShow} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ButtonTimer;
