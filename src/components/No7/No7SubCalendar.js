import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import FormCalendar from "../No6/Calendar/FormCalendar";

const No7SubCalendar = ({ item }) => {
  const [show, setShow] = useState(false);

  const deleteCalendar = () => {
    alert("đã xóa");
  };

  const editCalendar = () => {
    setShow(true);
  };

  const handleClose = () => setShow(false);
  return (
    <>
      <div className="no7__subCalendar">
        <Container>
          <Row>
            <Col
              className="no7__subCalendar--month"
              md={{ span: 3, offset: 1 }}>
              November
            </Col>
            <Col className="no7__subCalendar--content" md={6}>
              Đi vệ sinh
            </Col>
            <Col
              className="no7__subCalendar--close"
              md={1}
              onClick={deleteCalendar}>
              X
            </Col>
          </Row>
          <Row>
            <Col className="no7__subCalendar--day" md={{ span: 3, offset: 1 }}>
              12
            </Col>
            <Col md={6}>
              <Col className="no7__subCalendar--time">12/12/2021 12:12 </Col>
              <Col className="no7__subCalendar--repeat">Repeat : None</Col>
            </Col>
            <Col
              className="no7__subCalendar--edit"
              md={1}
              onClick={editCalendar}>
              ...
            </Col>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Timer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormCalendar show={show} setShow={setShow} />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default No7SubCalendar;
