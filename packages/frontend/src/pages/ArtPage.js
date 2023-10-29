import { Card, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArtsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Art</h1>
          </Col>
          <Col>
            <Col>
              <ul className="breadcrumb">
                <li>
                  <Link to="/">🐾Home</Link>
                </li>
              </ul>
            </Col>
          </Col>
          <Col>
            <img src="/cat_moon.jpg" alt="A Cat and Its Moon" />
            <img src="/cat_rocket.jpg" alt="A cat and Its Rocket" />
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArtsPage;
