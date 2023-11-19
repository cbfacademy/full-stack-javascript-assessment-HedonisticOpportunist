import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { suscribe } from "../../services/suscriptions/suscribeServices";
import { useState } from "react";

const SubscribeForm = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // TOAST MESSAGES
  const handleError = "💀💀 Error. Please try suscribing again.";
  const handleSuccess =
    "🎃🎃 Success! You are now subscribed to our newsletter.";

  // HANDLE SUSCRIBE FUNCTION
  const handleSuscribeResponse = async () => {
    let response = await suscribe(email);
    if (response) {
      setMessage(handleSuccess);
    } else {
      setMessage(handleError);
    }
    setEmail(email);
  };

  // SUBMIT SUSCRIBE FUNCTION
  const handleSuscribe = async (e) => {
    e.preventDefault();
    handleSuscribeResponse();
    if (email === "" || !email.includes("@") || email === null) {
      setMessage(handleError);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Form>
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
            {/* SUSCRIBE BUTTON */}
            <Button
              className="btn-grad"
              variant="outline-dark"
              size="sm"
              onClick={handleSuscribe}
            >
              🐾Suscribe to our newsletter.
            </Button>
          </Col>
          <Col>
            {/* DISPLAY SUSCRIBE STATUS*/}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubscribeForm;
