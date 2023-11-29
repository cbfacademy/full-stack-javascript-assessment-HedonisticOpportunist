import { Container, Col, Row } from "react-bootstrap";
import DashboardHeader from "../ui/DashboardHeader";
import { Link } from "react-router-dom";

const DashboardBreadcrumbs = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <DashboardHeader></DashboardHeader>
          </Col>
          <Col>
            <ul className="breadcrumb">
              <li>
                <Link to="/uploads">🐾Upload Link To Art | Games</Link>
              </li>
              <li>
                <Link to="/suscribe">
                  🐾Suscribe | Unsuscribe To Newsletter
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardBreadcrumbs;
