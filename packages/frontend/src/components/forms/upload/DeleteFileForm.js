import { Form, Container, Col, Row } from "react-bootstrap";
import FormButton from "../../buttons/FormButton";
import { deleteFile } from "../../../services/upload-services/uploadService";
import ErrorMessage from "../../messages/ErrorMessages";
import { messageConstants } from "../../../constants/messageConstants";
import MessageDisplay from "../../messages/MessageDisplay";
import { useCallback, useState } from "react";
import { validateTitleOrDescription } from "../../../validation/validators";

const DeleteFileForm = () => {
  // STATES
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  // ERROR STATES
  const [invalidText, setInvalidText] = useState("");

  // HANDLE DELETE FUNCTION
  const handleDelete = useCallback(async () => {
    let response = await deleteFile(title);
    if (response) {
      setMessage(messageConstants.DELETE_FILE_SUCCESS);
    } else {
      setMessage(messageConstants.DELETE_FILE_ERROR);
    }
    setTitle(title);
  }, [title]);

  // VALIDATE TITLE FUNCTION
  const validateTitle = useCallback((title) => {
    if (!validateTitleOrDescription(title)) {
      setInvalidText(messageConstants.TEXT_NOT_VALID);
    }
  }, []);

  // HANDLE SUBMIT FUNCTION
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      validateTitle(title);
      if (title === "" || title === null || title.includes("@")) {
        setMessage(messageConstants.DELETE_FILE_ERROR);
      } else {
        handleDelete();
      }
    },
    [validateTitle, title, handleDelete]
  );

  // RESET BUTTON FUNCTION
  const resetForm = () => {
    setTitle("");
    setInvalidText("");
    setMessage("");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Uploaded Work Title: </Form.Label>
                <Form.Control
                  type="url"
                  value={title}
                  placeholder="Enter URL"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <ErrorMessage error={invalidText}></ErrorMessage>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <FormButton
              submitFunction={handleSubmit}
              buttonText="🐻‍❄️Delete Files."
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

export default DeleteFileForm;
