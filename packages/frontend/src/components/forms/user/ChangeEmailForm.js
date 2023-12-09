import { Button, Container, Col, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

const ChangeEmailForm = () => {
  // STATES
  const [email, setEmail] = useState("");

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formFileLg" className="mb-3">
                {/* SET EMAIL */}
                <Form.Group controlId="email">
                  <Form.Label>Change Email: </Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
              </Form.Group>
            </Form>
            {/* CHANGE EMAIL BUTTON */}
            <Button className="btn-grad" variant="outline-dark" size="lg">
              🐻‍❄️Change Email.
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChangeEmailForm;
