import React, { useState } from "react";

import {
  Button,
  Col,
  Collapse,
  Container,
  Dropdown,
  Row,
} from "react-bootstrap";

import "../../styles/no7/no7.css";

function No7() {
  const [open, setOpen] = useState(false);

  return (
    <div className="no7">
      <Row>
        <Col>
          <Button
            variant="outline-secondary"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            size="lg"
            block
            fluid>
            click
          </Button>
        </Col>
      </Row>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Button variant="outline-primary" aria-expanded={open} block>
            1
          </Button>
          <Button variant="outline-primary" aria-expanded={open} block>
            2
          </Button>
          <Button variant="outline-primary" aria-expanded={open} block>
            3
          </Button>
          <Button variant="outline-primary" aria-expanded={open} block>
            4
          </Button>
        </div>
      </Collapse>
    </div>
  );
}

export default No7;
