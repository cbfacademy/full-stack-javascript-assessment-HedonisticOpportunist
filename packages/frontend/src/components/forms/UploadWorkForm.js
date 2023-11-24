import { Button, Container, Col, Form, Row } from "react-bootstrap";
import { messageConstants } from "../../constants/messageConstants";
import React, { useState } from "react";
import { upload } from "../../services/upload-services/uploadService";

const UploadWorkForm = () => {
  // STATES
  const [file, setUploadedFile] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // HANDLE FILE CHANGE FUNCTION
  const handleFileChange = (e) => {
    setUploadedFile(e.target.value);
  };

  // HANDLE SUBMIT FUNCTION
  // @ https://github.com/myogeshchavan97/react-upload-download-files/blob/master/src/components/App.js
  // Any errors are mine and mine alone.
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("title", title);
    // formData.append("description", description);
    // let response = await upload(formData);

    // if (response) {
    //   // Post a success message if everything went well
    //   setMessage(messageConstants.UPLOAD_SUCCEDSS);
    // } else {
    //   setMessage(messageConstants.UPLOAD_ERROR);
    // }

    // Ensure validation fails if all the necessary fields are empty.
    if (file === "" || description === "" || title === "") {
      setMessage(messageConstants.UPLOAD_ERROR);
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
                  <Form.Control
                    type="text"
                    name="description"
                    value={description}
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>
                {/* UPLOAD FILE */}
                <Form.Control
                  type="file"
                  className="file-input"
                  size="lg"
                  accept="image/*"
                  name="file"
                  value={file}
                  encType="multipart/form-data"
                  onChange={handleFileChange}
                />
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
