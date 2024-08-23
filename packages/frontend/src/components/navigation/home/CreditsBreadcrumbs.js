import { Container, Col, Row } from "react-bootstrap";
import Header from "../../ui/main/Header";
import { Link } from "react-router-dom";

const CreditsBreadcrumbs = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header></Header>
          </Col>
          <Col>
            <ul className="breadcrumb">
              <li>
                <Link to="/">🌑Return to Homepage</Link>
              </li>
              <li>
                <Link to="/credits">🌑Return to Credits</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreditsBreadcrumbs;
