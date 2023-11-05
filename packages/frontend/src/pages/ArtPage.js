import { Card, Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";

const ArtsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Art</h1>
          </Col>
          <Col>
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            <img src="images/pink_astro_cat.jpg" alt="A Pink Astronaut Cat" />
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Space Art</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  A sketch made in p5.js.
                </Card.Subtitle>
                <Card.Text>Some stuff here.</Card.Text>
                <Card.Link href="/">View the Space Art.</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArtsPage;
