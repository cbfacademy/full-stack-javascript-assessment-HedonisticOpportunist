import { Form, Container, Col, Row } from "react-bootstrap";
import FormButton from "../../buttons/FormButton";
import ErrorMessage from "../../messages/ErrorMessages";
import { messageConstants } from "../../../constants/messageConstants";
import MessageDisplay from "../../messages/MessageDisplay";
import { subscribe } from "../../../services/subscription-services/subscribersService";
import { useCallback, useState } from "react";
import { validateEmail } from "../../../validation/validators";

const SubscribeForm = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ERROR STATES
  const [invalidEmail, setInvalidEmailError] = useState("");

  // HANDLE SUBSCRIBE FUNCTION
  const handleSubscribeResponse = useCallback(async () => {
    let response = await subscribe(email);
    if (response) {
      setMessage(messageConstants.SUBSCRIBE_SUCCESS);
    } else {
      setMessage(messageConstants.SUBSCRIBE_ERROR);
    }
    setEmail(email);
  }, [email]);

  // HANDLE EMAIL VALIDATION
  const handleEmailValidation = useCallback((email) => {
    if (!validateEmail(email)) {
      setInvalidEmailError(messageConstants.EMAIL_NOT_VALID);
    }
  }, []);

  // SUBMIT SUBSCRIBE FUNCTION
  const handleSubscribe = useCallback(
    async (e) => {
      e.preventDefault();
      handleEmailValidation(email);
      if (email === "" || !email.includes("@") || email === null) {
        setMessage(messageConstants.SUBSCRIBE_ERROR);
      } else {
        handleSubscribeResponse();
      }
    },
    [handleEmailValidation, email, handleSubscribeResponse]
  );

  // RESET BUTTON FUNCTION
  const resetForm = () => {
    setEmail("");
    setInvalidEmailError("");
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
                  placeholder="Enter email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ErrorMessage error={invalidEmail}></ErrorMessage>
              </Form.Group>
            </Form>
            <FormButton
              submitFunction={handleSubscribe}
              buttonText="🐻‍❄️Suscribe to our newsletter."
            ></FormButton>
            <FormButton
              submitFunction={resetForm}
              buttonText="🐻‍❄️Reset Form."
            ></FormButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubscribeForm;
