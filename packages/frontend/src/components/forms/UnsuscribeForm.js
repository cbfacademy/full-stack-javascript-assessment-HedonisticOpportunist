import axios from "axios";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import log from "loglevel";
import { useState } from "react";

const UnsuscribeForm = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // TOAST MESSAGES
  const handleError = "🖤🖤 Error. Please try unsuscribing again.";
  const handleSuccess =
    "🦉🦉 Success! You are no longer suscribed to our newsletter.";

  // UNSUSCRIBE FUNCTION
  const unsuscribe = async () => {
    try {
      const { data } = await axios.delete(
        "http://localhost:5000/delete",
        {
          email,
        },
        { withCredentials: true }
      );
      log.info(data);
      const [message, success] = data;
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

  // SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    unsuscribe();

    // Ensure validation fails if all the necessary fields are empty.
    if (email === "") {
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
              size="lg"
              onClick={handleSubmit}
            >
              🐾Unsuscribe from our newsletter.
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

export default UnsuscribeForm;
