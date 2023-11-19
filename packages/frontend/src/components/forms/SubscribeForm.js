import axios from "axios";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import log from "loglevel";
import { useState } from "react";

const SubscribeForm = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // TOAST MESSAGES
  const handleError = "💀💀 Error. Please try suscribing again.";
  const handleSuccess =
    "🎃🎃 Success! You are now subscribed to our newsletter.";

  // SUSCRIBE FUNCTION
  const suscribe = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/suscribe",
        {
          email,
        },
        { withCredentials: true }
      );
      log.info(data);
      const { message, success } = data;
      if (success || message.includes("success")) {
        setMessage(handleSuccess);
      } else {
        setMessage(handleError);
      }
    } catch (error) {
      log.error(error);
    }
    setEmail(email);
  };

  // SUBMIT SUSCRIBE FUNCTION
  const handleSuscribe = async (e) => {
    e.preventDefault();
    suscribe();

    // Ensure validation fails if all the necessary fields are empty.
    if (email === "" || !email.includes("@")) {
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
