import { Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";

const GamesPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Games</h1>
          </Col>
          <Col>
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>Work in Progress :3</Col>
        </Row>
      </Container>
    </>
  );
};

export default GamesPage;
