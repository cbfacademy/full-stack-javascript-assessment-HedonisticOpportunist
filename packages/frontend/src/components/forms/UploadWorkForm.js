import { Button, Container, Col, Form, Row } from "react-bootstrap";
import { messageConstants } from "../../constants/messageConstants";
import React, { useState } from "react";
import { upload } from "../../services/upload-services/uploadService";

const UploadWorkForm = () => {
  // STATES
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  // HANDLE UPLOAD FUNCTION
  const handleUpload = async () => {
    let response = await upload(title, description, url);
    if (response) {
      // Post a success message if everything went well
      setMessage(messageConstants.UPLOAD_SUCCEDSS);
    } else {
      setMessage(messageConstants.UPLOAD_ERROR);
    }
    setTitle(title);
    setDescription(description);
    setURL(url);
  };

  // HANDLE SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (description === "" || title === "" || url === "") {
      setMessage(messageConstants.UPLOAD_ERROR);
    } else {
      handleUpload();
    }
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
                <Form.Group controlId="title">
                  <Form.Label>Title: </Form.Label>
                  {/* SET TITLE */}
                  <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Enter title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Form.Group>
                {/* SET DESCRIPTION */}
                <Form.Group controlId="description">
                  <Form.Label>Description: </Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={description}
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>
                {/* SET URL */}
                <Form.Group controlId="url">
                  <Form.Label>URL: </Form.Label>
                  <Form.Control
                    type="text"
                    name="url"
                    value={url}
                    placeholder="Enter url"
                    onChange={(e) => setURL(e.target.value)}
                    required
                  />
                </Form.Group>
              </Form.Group>
            </Form>
          </Col>
          <Col>
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
