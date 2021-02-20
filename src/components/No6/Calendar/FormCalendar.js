import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function FormCalendar(props) {
  const { show, setShow, item } = props;

  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);
  const socket = useSelector((state) => state.socket.socket);

  const [content, setContent] = useState("");
  const [datetime, setDatetime] = useState(null);
  const [repeat, setRepeat] = useState("");
  const [term, setTerm] = useState("");

  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    //input
    if (!datetime) return alert("Vui long nhap date & time " + datetime);

    const data = {
      user,
      currentContact,
      content,
      datetime,
      repeat,
      term,
      // id: item._id,
    };

    if (!item) socket.emit("create-calendar", data);
    else socket.emit("edit-calendar", data);

    //redux

    //UI
    socket.emit("fetch-calendar", { user, currentContact });

    setShow(false);
    alert("Tạo lịch hẹn thành công");
  };

  return (
    <>
      <Form>
        <Form.Group controlId="formBasicContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            // defaultValue={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicDateTime">
          <Form.Label>Date & Time (*)</Form.Label>
          <Form.Control
            type="datetime-local"
            // defaultValue={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Repeat</Form.Label>
          <Form.Control as="select" onChange={(e) => setRepeat(e.target.value)}>
            <option value="">None</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicTerm">
          <Form.Label>Term</Form.Label>
          <Form.Control
            type="datetime-local"
            // defaultValue={term}
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

export default FormCalendar;
