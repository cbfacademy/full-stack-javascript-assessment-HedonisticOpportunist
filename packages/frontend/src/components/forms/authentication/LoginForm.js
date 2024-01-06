import { Container, Col, Form, Row } from "react-bootstrap";
import FormButton from "../../buttons/FormButton";
import ErrorMessage from "../../messages/ErrorMessages";
import { messageConstants } from "../../../constants/messageConstants";
import MessageDisplay from "../../messages/MessageDisplay";
import { login } from "../../../services/authentication-services/authenticationService";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
} from "../../../validation/validators";

const LoginForm = () => {
  // NAVIGATE TO DASHBOARD
  const navigate = useNavigate();

  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // ERROR STATES
  const [invalidEmail, setInvalidEmailError] = useState("");
  const [passwordTooShort, setPasswordTooShortError] = useState("");

  // HANDLE LOGIN FUNCTION
  const handleLogin = useCallback(async () => {
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
    sessionStorage.setItem("token", response.token);
  }, [email, navigate, password]);

  // HANDLE VALIDATION FUNCTION
  const validateUserCredentials = useCallback((email, password) => {
    if (!validateEmail(email)) {
      setInvalidEmailError(messageConstants.EMAIL_NOT_VALID);
    }
    if (!validatePassword(password)) {
      setPasswordTooShortError(messageConstants.PASSWORD_TOO_SHORT);
    }
  }, []);

  // SUBMIT FUNCTION
  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      validateUserCredentials(email, password);
      if (email === "" || password === "") {
        setMessage(messageConstants.LOGIN_ERROR);
      } else {
        handleLogin();
      }
    },
    [validateUserCredentials, email, password, handleLogin]
  );

  // RESET BUTTON FUNCTION
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setInvalidEmailError("");
    setPasswordTooShortError("");
    setMessage("");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <MessageDisplay message={message}></MessageDisplay>
          </Col>
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
                <ErrorMessage error={invalidEmail}></ErrorMessage>
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
                <ErrorMessage error={passwordTooShort}></ErrorMessage>
              </Form.Group>
              <FormButton
                submitFunction={handleFormSubmit}
                buttonText="🐾Login."
              ></FormButton>
              <FormButton
                submitFunction={resetForm}
                buttonText="🐾Reset Form."
              ></FormButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginForm;
