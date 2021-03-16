import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormCalendar from "../No6/Calendar/FormCalendar";

const No7SubCalendar = ({ item }) => {
  const socket = useSelector((state) => state.socket.socket);
  const user = useSelector((state) => state.user);
  const currentContact = useSelector((state) => state.currentContact);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [time, setTime] = useState("");
  const [term, setTerm] = useState("");
  const [repeat, setRepeat] = useState("");
  var date = new Date(item.datetime);
  let hour = date.getHours();
  let minute = date.getMinutes();
  var dateTerm = new Date(item.term);
  let dayTerm = dateTerm.getDay();
  let monthTerm = dateTerm.getMonth() + 1;
  let yearTerm = dateTerm.getFullYear();
  let hourTerm = dateTerm.getHours();
  let minuteTerm = dateTerm.getMinutes();
  let meridiem = "AM";
  let listNameOfDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday ",
    "Friday",
    "Satuday",
    "Sunday",
  ];

  let listNameOfMonth = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "Octuber",
    "November",
    "December",
  ];

  const deleteCalendar = async (id) => {
    alert("đã xóa " + id);

    await socket.emit("delete-calendar", { currentContact, id });
  };

  const editCalendar = async (id) => {
    alert("sửa  " + id);

    setShow(true);
  };

  const handleClose = () => setShow(false);

  const setNameOfMonth = () => {
    setMonth(listNameOfMonth[item.datetime.substring(5, 7) - 1]);
  };

  const setNameOfDay = () => {
    var numberOfDayInWeek = date.getDay();
    let nameOfDay = listNameOfDay[numberOfDayInWeek - 1];
    if (hour > 12) meridiem = "PM";
    setTime(`${nameOfDay} ${hour}:${minute} ${meridiem}`);
  };

  const setContentOfTerm = () => {
    if (hourTerm > 12) meridiem = "PM";
    setTerm(
      `${hourTerm}:${minuteTerm} ${meridiem} ${dayTerm}/${monthTerm}/${yearTerm} `
    );
  };

  useEffect(() => {
    setContent(item.content);
    setDay(item.datetime.substring(8, 10));
    setNameOfMonth();
    setNameOfDay();
    setRepeat(item.repeat);
    setContentOfTerm();
  }, [item]);

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
              <Col className="no7__subCalendar--time">{time}</Col>
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
