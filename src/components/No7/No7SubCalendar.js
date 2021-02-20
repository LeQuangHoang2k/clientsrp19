import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormCalendar from "../No6/Calendar/FormCalendar";

const No7SubCalendar = ({ item }) => {
  const socket = useSelector((state) => state.socket.socket);
  // const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState(item.content);
  const [day, setDay] = useState(item.datetime.substring(8, 10));
  const [month, setMonth] = useState(item.datetime.substring(5, 7));
  const [datetime, setDateTime] = useState(item.datetime);
  const [term, setTerm] = useState(item.term);
  const [repeat, setRepeat] = useState(item.repeat);

  const deleteCalendar = async (id) => {
    alert("đã xóa " + id);

    await socket.emit("delete-calendar", { currentContact, id });
  };

  const editCalendar = async (id) => {
    alert("sửa  " + id);

    setShow(true);
  };

  const handleClose = () => setShow(false);

  // useEffect(() => {
  //   setContent
  // }, [content]);
  return (
    <>
      <div className="no7__subCalendar">
        <Container>
          <Row>
            <Col
              className="no7__subCalendar--month"
              md={{ span: 3, offset: 1 }}>
              {month}
            </Col>
            <Col className="no7__subCalendar--content" md={6}>
              {content}
            </Col>
            <Col
              className="no7__subCalendar--close"
              md={1}
              onClick={() => deleteCalendar(item._id)}>
              X
            </Col>
          </Row>
          <Row>
            <Col className="no7__subCalendar--day" md={{ span: 3, offset: 1 }}>
              {day}
            </Col>
            <Col md={6}>
              <Col className="no7__subCalendar--time">{datetime}</Col>
              <Col className="no7__subCalendar--time">Term : {term}</Col>
              <Col className="no7__subCalendar--repeat">
                Repeat : {repeat === "" ? "None" : item.repeat}
              </Col>
            </Col>
            <Col
              className="no7__subCalendar--edit"
              md={1}
              onClick={() => editCalendar(item._id)}>
              ...
            </Col>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Timer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormCalendar show={show} setShow={setShow} item={item} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default No7SubCalendar;
