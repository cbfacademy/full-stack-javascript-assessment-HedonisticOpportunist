import { Button, Container, Col, Form, Row } from "react-bootstrap";
import { messageConstants } from "../../../constants/messageConstants";
import { login } from "../../../services/authentication-services/authenticationService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  // NAVIGATE TO DASHBOARD
  const navigate = useNavigate();

  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // HANDLE LOGIN FUNCTION
  const handleLogin = async () => {
    let response = await login(email, password);
    if (response.success) {
      setMessage(messageConstants.LOGIN_SUCCESS);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setMessage(messageConstants.LOGIN_ERROR);
    }
    setEmail(email);
    setPassword(password);

    //Credit: @ https://medium.com/@furqanistic/decoding-jwt-secure-authentication-in-mern-applications-23cd7141e2f
    localStorage.setItem("token", response.token);
  };

  // SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setMessage(messageConstants.LOGIN_ERROR);
    } else {
      handleLogin();
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
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
