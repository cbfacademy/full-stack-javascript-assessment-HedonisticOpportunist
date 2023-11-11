import { Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";

const CreditsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          {" "}
          <Col>
            <h1>Credits</h1>
          </Col>
          <Col>
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            A project is never created in isolation; the following sources were
            used to make the web application what it is today.
          </Col>
          <Col>
            <img
              className="mini-logo"
              src="images/cat_moon.jpg"
              alt="A Cat and a Moon"
            />
            The image of the cat on the moon was created by catalyststuff on
            Freepik.
          </Col>
          <Col>
            <img
              className="mini-logo"
              src="images/cat_rocket.jpg"
              alt="A Cat and a Rocket"
            />
            The image of the cat and a rocket was created by catalyststuff on
            Freepik.
          </Col>
          <Col>
            <img
              className="mini-logo"
              src="images/pink_astro_cat.jpg"
              alt="A Pink Astronaut Cat"
            />
            The image of the pink astronaut cat was created by storyset on
            Freepik.
          </Col>
          <Col>
            <img
              className="mini-logo"
              src="images/cat_and_fish.jpg"
              alt="A Cat and a Fish"
            />
            The image of the cat and a fish was created by catalyststuff on
            Freepik.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreditsPage;
