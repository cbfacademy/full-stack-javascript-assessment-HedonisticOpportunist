import { Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";

const InteractiveArtPage = () => {
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
            <h3>Interactive Art</h3>
            <p>Find an assortment of interactive art pieces below. </p>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Col>
            <h4>Floating Space Cat ♡</h4>
          </Col>
          <Col>
            {/* GAME LINK AND DESCRIPTION */}
            <a href="space-cat-art/floating-astro-cat/index.html">
              Move the floating space cat.
            </a>
            <p>
              Move an image of a space cat using your mouse coordinates. Hit the
              browser back button to return to the main page.{" "}
            </p>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Col>
            <h4>Many Cats ♡</h4>
          </Col>
          <Col>
            {/* GAME LINK AND DESCRIPTION */}
            <a href="space-cat-art/cat-filling-up-screen/index.html">
              Watch the scene fill up with many cats.
            </a>
            <p>
              Watch the scene fill up with the same cat image across a screen --
              click 'Reload' to see it happen again.
            </p>
            <p>Exit the scene by clicking on the browser's 'back' button.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InteractiveArtPage;
