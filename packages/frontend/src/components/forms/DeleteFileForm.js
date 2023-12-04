import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";

const DeleteFileForm = () => {
  // STATES
  const [link, setLink] = useState("");

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Uploaded Work Link: </Form.Label>
                <Form.Control
                  type="link"
                  value={link}
                  placeholder="Enter Link"
                  required
                  onChange={(e) => setLink(e.target.value)}
                />
              </Form.Group>
            </Form>
            {/* DELETE FILES BUTTON */}
            <Button className="btn-grad" variant="outline-dark" size="lg">
              🐾 Delete Files
            </Button>
          </Col>
          <Col>
            {/* DISPLAY FILE DELETED STATUS*/}
            <p></p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DeleteFileForm;
