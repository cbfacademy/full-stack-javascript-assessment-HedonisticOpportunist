import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Space Cats</h1>
          </Col>
          <Col>
            <ul className="breadcrumb">
              <li>
                <Link to="/">🐾Home</Link>
              </li>
              <li>
                <Link to="/games">🐾Games</Link>
              </li>
              <li>
                <Link to="/art">🐾Art</Link>
              </li>
              <li>
                <Link to="/credits">🐾Credits</Link>
              </li>
              <li>
                <Link to="/login">🐾Login</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
