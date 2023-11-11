import { Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";

const GamesPage = () => {
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
            <h3>Games</h3>
          </Col>
          <Col>Work in Progress ^•ﻌ•^ฅ♡</Col>
        </Row>
      </Container>
    </>
  );
};

export default GamesPage;
