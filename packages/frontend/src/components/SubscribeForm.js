import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";

const SubscribeForm = () => {
  // States
  const [email, setEmail] = useState("");

  // Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Congrats :3 You will now receive regular conrrespondence.");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Col>
              <h2>Subscribe To Our Newsletter ᓚᘏᗢ</h2>
            </Col>
            <Form>
              {/* Suscribe Form */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address: </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Form>
            {/* Suscribe Button */}
            <Button
              className="btn-grad"
              variant="outline-dark"
              size="lg"
              onClick={handleSubmit}
            >
              🐾Suscribe to our newsletter.
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubscribeForm;
