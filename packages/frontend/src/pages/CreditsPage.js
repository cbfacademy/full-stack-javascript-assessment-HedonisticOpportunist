import { Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";

const CreditsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            {/* PAGE TITLE */}
            <h3>Credits</h3>
          </Col>
          <Col>
            <p>
              A project never lives in isolation; the following sources helped
              make <i>Space Cats</i> what it is today.
            </p>
          </Col>
          <Col>
            {/* IMAGE CREDITS */}
            <img
              className="mini-logo"
              src="images/cat_moon.jpg"
              alt="A Cat and a Moon"
            />
            <a href="https://www.facebook.com/moshimoshicatalyst">
              Credit: catalyststuff/moshimoshicatalyst.
            </a>
          </Col>
          <Col>
            <img
              className="mini-logo"
              src="images/cat_rocket.jpg"
              alt="A Cat and a Rocket"
            />
            <a href="https://www.facebook.com/moshimoshicatalyst">
              Credit: catalyststuff/moshimoshicatalyst.
            </a>
          </Col>
          <Col>
            <img
              className="mini-logo"
              src="images/pink_astro_cat.jpg"
              alt="A Pink Astronaut Cat"
            />
            <a href="https://storyset.com/">Credit: storyset</a>
          </Col>
          <Col>
            <img
              className="mini-logo"
              src="images/cat_and_fish.jpg"
              alt="A Cat and a Fish"
            />
            <a href="https://www.facebook.com/moshimoshicatalyst">
              Credit: catalyststuff/moshimoshicatalyst.
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreditsPage;
