import { Button, Container, Col, Form, Row } from "react-bootstrap";

const UploadWorkForm = () => {
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
                <Form.Control type="file" className="file-input" size="lg" />
              </Form.Group>
            </Form>
            {/* UPLOAD WORK BUTTON */}
            <Button className="btn-grad" variant="outline-dark" size="lg">
              🐾Upload Work.
            </Button>
          </Col>
          <Col>
            {/* UPLOAD WORK STATUS MESSAGE */}
            <p></p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadWorkForm;
