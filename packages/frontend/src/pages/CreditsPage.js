import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreditsPage = () => {
  return (
    <>
      <Container fluid>
        <Row></Row>
        <Col>
          <h1>Credits</h1>
        </Col>
        <Col>
          <ul className="breadcrumb">
            <li>
              <Link to="/">🐾Home</Link>
            </li>
          </ul>
        </Col>
        <Col>
          A project is never created in isolation; the following sources were
          used to make the web application what it is today.
        </Col>
        <Col>
          <img
            className="mini-logo"
            src="/cat_moon.jpg"
            alt="A Cat and Its Moon"
          />
          The image of the cat on the moon was created by catalyststuff on
          Freepik.
        </Col>
        <Col>
          <img
            className="mini-logo"
            src="/cat_rocket.jpg"
            alt="A Cat and Its Rocket"
          />
          The image of the cat and a rocket was created by catalyststuff on
          Freepik.
        </Col>
      </Container>
    </>
  );
};

export default CreditsPage;
