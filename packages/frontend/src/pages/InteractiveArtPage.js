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
          </Col>
          <Col>
            <h4>Floating Space Cat</h4>
            <a href="space-cat-art/floating-astro-cat/index.html">
              Move the floating space cat.
            </a>
          </Col>
          <h4>Many Cats</h4>
          <a href="space-cat-art/cat-filling-up-screen/index.html">
            Watch the scene fill up with many cats.
          </a>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default InteractiveArtPage;
