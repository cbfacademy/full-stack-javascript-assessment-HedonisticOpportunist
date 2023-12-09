import { Button, Container, Col, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

const ChangeUserNameForm = () => {
  // STATES
  const [username, setUserName] = useState("");

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formFileLg" className="mb-3">
                {/* SET USERNAME */}
                <Form.Group controlId="username">
                  <Form.Label>Change Username: </Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Form.Group>
            </Form>
            {/* CHANGE USERNAME BUTTON */}
            <Button className="btn-grad" variant="outline-dark" size="lg">
              🐻‍❄️Change Username.
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChangeUserNameForm;
