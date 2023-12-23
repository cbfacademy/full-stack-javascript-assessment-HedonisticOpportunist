import { Form, Container, Col, Row } from "react-bootstrap";
import FormButton from "../../buttons/FormButton";
import ErrorMessage from "../../messages/ErrorMessages";
import { messageConstants } from "../../../constants/messageConstants";
import MessageDisplay from "../../messages/MessageDisplay";
import { useCallback, useState } from "react";
import { unsubscribe } from "../../../services/subscription-services/subscribersService";
import { validateEmail } from "../../../validation/validators";

const UnsubscribeForm = () => {
  // STATES
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ERROR STATES
  const [invalidEmail, setInvalidEmailError] = useState("");

  // UNSUBSCRIBE FUNCTION
  const handleUnsubscribe = useCallback(async () => {
    let response = await unsubscribe(email);
    if (response) {
      setMessage(messageConstants.UNSUBSCRIBE_SUCCESS);
    } else {
      setMessage(messageConstants.UNSUBSCRIBE_ERROR);
    }
    setEmail(email);
  }, [email]);

  // HANDLE EMAIL VALIDATION
  const handleEmailValidation = useCallback((email) => {
    if (!validateEmail(email)) {
      setInvalidEmailError(messageConstants.EMAIL_NOT_VALID);
    }
  }, []);

  // SUBMIT FUNCTION
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      handleEmailValidation(email);
      if (email === "" || !email.includes("@") || email === null) {
        setMessage(messageConstants.UNSUBSCRIBE_ERROR);
      } else {
        handleUnsubscribe();
      }
    },
    [handleEmailValidation, email, handleUnsubscribe]
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
              submitFunction={handleSubmit}
              buttonText="🐻‍❄️Unsubscribe from our newsletter."
            ></FormButton>
            <FormButton
              submitFunction={resetForm}
              buttonText="🐻‍❄️Reset Form."
            ></FormButton>
          </Col>
          <Col>
            <MessageDisplay message={message}></MessageDisplay>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UnsubscribeForm;
