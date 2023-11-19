import { Container, Col, Row } from "react-bootstrap";
import Header from "../ui/Header";
import { Link } from "react-router-dom";

const HeaderBreadcrumbs = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* HEADER AND LOGO */}
            <Header></Header>
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
                <Link to="/interactive-art">🐾Interactive Art</Link>
              </li>
              <li>
                <Link to="/credits">🐾Credits</Link>
              </li>
              <li>
                <Link to="/login">🐾Login | Signup</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeaderBreadcrumbs;
