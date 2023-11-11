import { Button, Form, Container, Col, Row } from "react-bootstrap";

const Subscribe = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Col>
              <h2>Subscribe To Our Newsletter ᓚᘏᗢ</h2>
            </Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address: </Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
            </Form>
            <Button className="btn-grad" variant="outline-dark" size="lg">
              🐾Suscribe to our newsletter.
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Subscribe;
