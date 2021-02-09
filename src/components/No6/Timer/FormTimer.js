import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function FormTimer(props) {
  const { show, setShow } = props;

  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);
  const socket = useSelector((state) => state.socket.socket);

  const [content, setContent] = useState(null);
  const [datetime, setDatetime] = useState(null);
  const [repeat, setRepeat] = useState(null);
  const [term, setTerm] = useState(null);

  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    //input
    if (!datetime) return alert("Vui long nhap date & time");

    socket.emit("reminder", { user, currentContact });

    //redux

    //UI
    setShow(false);
  };

  // useEffect(() => {
  //   socket.on("alo", () => {
  //     // alert("alo");
  //     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  //   });
  // },[]);

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicDateTime">
          <Form.Label>Date & Time (*)</Form.Label>
          <Form.Control
            type="datetime-local"
            onChange={(e) => setDatetime(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Repeat</Form.Label>
          <Form.Control as="select" onChange={(e) => setRepeat(e.target.value)}>
            <option value="0">None</option>
            <option value="1">Day</option>
            <option value="2">Week</option>
            <option value="3">Month</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicTerm">
          <Form.Label>Term</Form.Label>
          <Form.Control
            type="datetime-local"
            onChange={(e) => setTerm(e.target.value)}
          />
        </Form.Group>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
}

export default FormTimer;
