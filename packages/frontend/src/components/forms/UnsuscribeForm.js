import axios from "axios";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import log from "loglevel";
import { useState } from "react";

const UnsuscribeForm = () => {
  // STATES
  const [email, setEmail] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  // TOAST MESSAGES
  const handleError = "🖤🖤 Error. Please try unsuscribing again.";
  const handleSuccess =
    "🦉🦉 Success! You are no longer suscribed to our newsletter.";

  // GET SUSCRIBERS FUNCTION
  const getSuscribers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/suscribers", {
        withCredentials: true,
      });

      // Filter suscribers by email and then further by the userEmail
      for (let i = 0; i < data.suscribers.length; i++) {
        let foundMail = data.suscribers[i]["email"];

        if (foundMail == userEmail) {
          setEmail(foundMail);
        }
      }
    } catch (error) {
      log.error(error);
    }
  };

  // UNSUSCRIBE FUNCTION
  const unsuscribe = async () => {
    try {
      getSuscribers();
      const { data } = await axios.delete(
        "http://localhost:5000/delete/:" + email,
        { withCredentials: true }
      );
      log.info(data.data);
      const { message, success } = data;
      if (success || message.includes("success")) {
        setMessage(handleSuccess);
      } else {
        setMessage(handleError);
      }
    } catch (error) {
      log.error(error);
    }
    setEmail(userEmail);
  };

  // SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    unsuscribe();

    // Ensure validation fails if all the necessary fields are empty.
    if (userEmail === "") {
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
                  value={userEmail}
                  placeholder="Enter email"
                  required
                  onChange={(e) => setUserEmail(e.target.value)}
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
