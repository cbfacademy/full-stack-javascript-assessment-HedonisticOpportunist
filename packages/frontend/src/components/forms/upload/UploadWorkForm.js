import { Container, Col, Form, Row } from "react-bootstrap";
import FormButton from "../../buttons/FormButton";
import ErrorMessage from "../../messages/ErrorMessages";
import { messageConstants } from "../../../constants/messageConstants";
import MessageDisplay from "../../messages/MessageDisplay";
import React, { useCallback, useState } from "react";
import { upload } from "../../../services/upload-services/uploadService";
import {
  validateTitleOrDescription,
  validateURL,
} from "../../../validation/validators";

const UploadWorkForm = () => {
  // STATES
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  // ERROR STATES
  const [invalidText, setInvalidText] = useState("");
  const [invalidURL, setInvalidUrl] = useState("");

  // HANDLE UPLOAD FUNCTION
  const handleUpload = useCallback(async () => {
    let response = await upload(title, description, url);
    if (response) {
      setMessage(messageConstants.UPLOAD_SUCCESS);
    } else {
      setMessage(messageConstants.UPLOAD_ERROR);
    }
    setTitle(title);
    setDescription(description);
    setURL(url);
  }, [title, description, url]);

  // VALIDATE TITLE AND DESCRIPTION FUNCTION
  const validateUploadDetails = useCallback((title, description, url) => {
    if (!validateTitleOrDescription(title)) {
      setInvalidText(messageConstants.TEXT_NOT_VALID);
    }
    if (!validateTitleOrDescription(description)) {
      setInvalidText(messageConstants.TEXT_NOT_VALID);
    }
    if (!validateURL(url)) {
      setInvalidUrl(messageConstants.URL_NOT_VALID);
    }

    if (!validateTitleOrDescription(title) && !validateURL(url)) {
      setInvalidUrl(messageConstants.URL_NOT_VALID);
    }
  }, []);

  // HANDLE SUBMIT FUNCTION
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      validateUploadDetails(title, description, url);
      if (
        description === "" ||
        title === "" ||
        url === "" ||
        !validateURL(url)
      ) {
        setMessage(messageConstants.UPLOAD_ERROR);
      } else {
        handleUpload();
      }
    },
    [validateUploadDetails, description, title, url, handleUpload]
  );

  // RESET BUTTON FUNCTION
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setURL("");
    setInvalidText("");
    setInvalidUrl("");
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
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Group controlId="title">
                  <Form.Label>Title: </Form.Label>
                  {/* SET TITLE */}
                  <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                  <ErrorMessage error={invalidText}></ErrorMessage>
                </Form.Group>
                {/* SET DESCRIPTION */}
                <Form.Group controlId="description">
                  <Form.Label>Description: </Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={description}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                  <ErrorMessage error={invalidText}></ErrorMessage>
                </Form.Group>
                {/* SET URL */}
                <Form.Group controlId="url">
                  <Form.Label>URL: </Form.Label>
                  <Form.Control
                    type="text"
                    name="url"
                    value={url}
                    placeholder="Url"
                    onChange={(e) => setURL(e.target.value)}
                    required
                  />
                  <ErrorMessage error={invalidURL}></ErrorMessage>
                </Form.Group>
              </Form.Group>
            </Form>
            <FormButton
              submitFunction={handleSubmit}
              buttonText="🐻‍❄️Upload Work."
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

export default UploadWorkForm;
