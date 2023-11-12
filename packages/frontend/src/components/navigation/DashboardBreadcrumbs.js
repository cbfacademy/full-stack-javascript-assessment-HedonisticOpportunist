import { Container, Col, Row } from "react-bootstrap";
import Header from "../Header";
import { Link } from "react-router-dom";

const DashboardBreadcrumbs = () => {
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
                <Link to="/uploads">🐾Upload Your Work</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardBreadcrumbs;
