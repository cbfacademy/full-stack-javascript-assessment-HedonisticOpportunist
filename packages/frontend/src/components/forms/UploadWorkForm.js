import axios from "axios";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import log from "loglevel";
import { useState } from "react";

const UploadWorkForm = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // TOAST MESSAGES
  const handleError = "🐢🐢 Error. Please try logging in again.";
  const handleSuccess = "🐼🐼 Success! You have been logged in.";

  // UPLOAD WORK FUNCTION
  // Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
  // Any further modifications are mine and mine alone.
  const uploadWork = async () => {
    // try {
    //   const { data } = await axios.post(
    //     "http://localhost:5000/login",
    //     {
    //       email,
    //       password,
    //     },
    //     { withCredentials: true }
    //   );
    //   log.info(data);
    //   const { message, success } = data;
    //   if (success || message.includes("success")) {
    //     setMessage(handleSuccess);
    //     setTimeout(() => {
    //       navigate("/dashboard");
    //     }, 1000);
    //   } else {
    //     setMessage(handleError);
    //   }
    // } catch (error) {
    //   log.error(error);
    // }
    // setEmail(email);
    // setPassword(password);
  };

  // SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    //login();
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>
                  <p> Upload Your Work ^•^* </p>
                </Form.Label>
                <Form.Control type="file" className="file-input" size="lg" />
              </Form.Group>
            </Form>
            {/* UPLOAD WORK BUTTON */}
            <Button
              className="btn-grad"
              variant="outline-dark"
              size="lg"
              onClick={handleSubmit}
            >
              🐾Upload Work.
            </Button>
          </Col>
          <Col>
            {/* UPLOAD WORK STATUS MESSAGE */}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadWorkForm;
