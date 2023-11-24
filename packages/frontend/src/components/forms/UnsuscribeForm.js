import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { messageConstants } from "../../constants/messageConstants";
import { unsuscribe } from "../../services/suscriptions-services/suscribeServices";
import { useState } from "react";

const UnsuscribeForm = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // UNSUSCRIBE FUNCTION
  const handleUnsuscribe = async () => {
    let response = await unsuscribe(email);
    if (response) {
      setMessage(messageConstants.UNSUSCRIBE_SUCCESS);
    } else {
      setMessage(messageConstants.UNSUSCRIBE_ERROR);
    }
    setEmail(email);
  };

  // SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleUnsuscribe();
    if (email === "" || !email.includes("@") || email === null) {
      setMessage(messageConstants.UNSUSCRIBE_ERROR);
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
            {/* UNSUSCRIBE BUTTON */}
            <Button
              className="btn-grad"
              variant="outline-dark"
              size="lg"
              onClick={handleSubmit}
            >
              🐾Unsuscribe from our newsletter.
            </Button>
          </Col>
          <Col>
            {/* DISPLAY UNSUSCRIBE STATUS*/}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UnsuscribeForm;
