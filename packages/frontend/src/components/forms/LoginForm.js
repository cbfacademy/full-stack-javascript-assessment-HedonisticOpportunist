import axios from "axios";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import log from "loglevel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  // NAVIGATE TO DASHBOARD
  const navigate = useNavigate();

  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // TOAST MESSAGES
  const handleError = "🐢🐢 Error. Please try logging in again.";
  const handleSuccess = "🐼🐼 Success! You have been logged in.";

  // LOGIN FUNCTION
  // Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
  // Any further modifications are mine and mine alone.
  const login = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      log.info(data);
      const { message, success } = data;
      if (success && message.includes("success")) {
        setMessage(handleSuccess);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setMessage(handleError);
      }
    } catch (error) {
      log.error(error);
    }
    setEmail(email);
    setPassword(password);
  };

  // SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    login();
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              {/* LOGIN BUTTON */}
              <Button
                className="btn-grad"
                variant="outline-dark"
                type="submit"
                size="lg"
                onClick={handleSubmit}
              >
                🐾Login
              </Button>
            </Form>
          </Col>
          <Col>
            {/* LOGIN STATUS MESSAGE */}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginForm;
