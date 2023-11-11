import { Container, Col, Row } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";

const HomeBreadcrumbs = () => {
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
                <Link to="/">🐾Home</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeBreadcrumbs;
