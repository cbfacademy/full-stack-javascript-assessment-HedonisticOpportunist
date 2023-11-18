import axios from "axios";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import log from "loglevel";
import React, { useState } from "react";

const UploadWorkForm = () => {
  // STATES
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  // TOAST MESSAGES
  const handleError = "*ੈ♡⸝⸝🪐༘⋆ Error. Please try uploading your file again.";
  const handleSuccess = "🦢🦢 Success! Your file has been uploaded.";

  // HANDLE FILE CHANGE FUNCTION
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // HANDLE SUBMIT FUNCTION
  // @ https://cloudinary.com/blog/guest_post/upload-images-to-cloudinary-with-node-js-and-react
  // https://codewithsudeep.com/sudeep/javascript/mern-stack/how-to-upload-file-using-mern-stack/
  // Any modications and errors are mine and mine alone
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Post the data to backend
      await axios.post("http://localhost:5000/fileupload", formData);

      // Post a success message if everything went well
      setMessage(handleSuccess);
    } catch (error) {
      setMessage(handleError);
      log.error(error.message);
    }

    // Ensure validation fails if all the necessary fields are empty.
    if (file === "") {
      setMessage(handleError);
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
                <Form.Control
                  type="file"
                  className="file-input"
                  size="lg"
                  accept="image/*"
                  encType="multipart/form-data"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Form>
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
