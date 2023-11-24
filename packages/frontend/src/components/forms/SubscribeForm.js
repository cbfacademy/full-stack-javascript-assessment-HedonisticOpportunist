import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { messageConstants } from "../../constants/messageConstants";
import { suscribe } from "../../services/suscriptions-services/suscribeServices";
import { useState } from "react";

const SubscribeForm = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // HANDLE SUSCRIBE FUNCTION
  const handleSuscribeResponse = async () => {
    let response = await suscribe(email);
    if (response) {
      setMessage(messageConstants.SUSCRIBE_SUCCESS);
    } else {
      setMessage(messageConstants.SUSCRIBE_ERROR);
    }
    setEmail(email);
  };

  // SUBMIT SUSCRIBE FUNCTION
  const handleSuscribe = async (e) => {
    e.preventDefault();
    handleSuscribeResponse();
    if (email === "" || !email.includes("@") || email === null) {
      setMessage(messageConstants.SUSCRIBE_ERROR);
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
