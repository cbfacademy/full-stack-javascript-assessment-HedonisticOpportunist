import { Container, Col, Form, Row } from "react-bootstrap";
import ErrorMessage from "../../messages/ErrorMessages";
import { messageConstants } from "../../../constants/messageConstants";
import MessageDisplay from "../../messages/MessageDisplay";
import { signup } from "../../../services/authentication-services/authenticationService";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../../validation/validators";
import FormButton from "../../buttons/FormButton";

const SignupForm = () => {
  // NAVIGATE TO DASHBOARD
  const navigate = useNavigate();

  // STATES
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // ERROR STATES
  const [invalidEmail, setInvalidEmailError] = useState("");
  const [passwordTooShort, setPasswordTooShortError] = useState("");
  const [usernameTooShort, setUsernameTooShort] = useState("");

  // HANDLE VALIDATION FUNCTION
  const validateRegistrationCredentials = useCallback(
    (username, email, password) => {
      if (!validateUsername(username)) {
        setUsernameTooShort(messageConstants.USERNAME_TOO_SHORT);
      }

      if (!validateEmail(email)) {
        setInvalidEmailError(messageConstants.EMAIL_NOT_VALID);
      }
      if (!validatePassword(password)) {
        setPasswordTooShortError(messageConstants.PASSWORD_TOO_SHORT);
      }
    },
    []
  );

  // HANDLE SIGN UP FUNCTION
  const handleSignup = useCallback(async () => {
    let response = await signup(username, email, password);
    if (response.success) {
      setMessage(messageConstants.SIGN_UP_SUCCESS);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setMessage(messageConstants.SIGN_UP_ERROR);
    }
    setUserName(username);
    setEmail(email);
    setPassword(password);

    //Credit: @ https://medium.com/@furqanistic/decoding-jwt-secure-authentication-in-mern-applications-23cd7141e2f
    sessionStorage.setItem("token", response.token);
  }, [navigate, username, email, password]);

  // SUBMIT FUNCTION
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      validateRegistrationCredentials(username, email, password);
      if (username === "" || email === "" || password === "") {
        setMessage(messageConstants.SIGN_UP_ERROR);
      } else {
        handleSignup();
      }
    },
    [validateRegistrationCredentials, username, email, password, handleSignup]
  );

  // RESET BUTTON FUNCTION
  const resetForm = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setUsernameTooShort("");
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
              <Form.Group
                className="mb-3"
                controlId="formBasicUserName"
                required
              >
                <Form.Label>Username: </Form.Label>
                <Form.Control
                  type="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                  required
                />
                <ErrorMessage error={usernameTooShort}></ErrorMessage>
              </Form.Group>
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
                submitFunction={handleSubmit}
                buttonText="🐾Sign Up."
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

export default SignupForm;
