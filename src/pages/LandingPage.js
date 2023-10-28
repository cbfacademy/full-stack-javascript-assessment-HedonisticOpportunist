import { Container, Col, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <img src="/cat_moon.jpg" alt="A Cat and Its Moon" />
          </Col>
          <Col>
            <h2> Silly Games and ... Cats!</h2>
            <p>This page is still being developed.</p>
            <p>Come back later.</p>
          </Col>
          <Col>
            <img src="/cat_rocket.jpg" alt="A cat and Its Rocket" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
