import { Button, Container, Col, Row } from "react-bootstrap";

const Subscribe = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
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
