import { Container, Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="header">
            <LazyLoadImage
              className="image"
              src="/images/space_cats_logo.png"
              alt="Space Cats Logo"
            />
            <h1 className="header-title">Space Cats ^._.^</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
