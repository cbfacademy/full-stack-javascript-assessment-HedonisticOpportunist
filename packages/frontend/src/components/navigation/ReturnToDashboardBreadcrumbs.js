import { Container, Col, Row } from "react-bootstrap";
import DashboardHeader from "../ui/DashboardHeader";
import { Link } from "react-router-dom";

const ReturnToDashboardBreadcrumbs = () => {
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
                <Link to="/dashboard">👾Return to Dashboard</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReturnToDashboardBreadcrumbs;
