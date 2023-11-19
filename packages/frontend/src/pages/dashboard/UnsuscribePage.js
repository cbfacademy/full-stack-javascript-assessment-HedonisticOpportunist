import { Col, Container, Row } from "react-bootstrap";
import ReturnToDashboardBreadcrumbs from "../../components/navigation/ReturnToDashboardBreadcrumbs";
import UnsuscribeForm from "../../components/forms/UnsuscribeForm";

const UnsuscribePage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <ReturnToDashboardBreadcrumbs></ReturnToDashboardBreadcrumbs>
          </Col>
          <Col>
            {/* PAGE TITLE */}
            <h3>Unsuscribe From Our Internal Newsletter ᓚᘏᗢ</h3>
          </Col>
          <Col>
            <p>We're sad to see you go! 🦊.</p>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="dashed"></hr>
          </Col>
          <Col>
            <h4>Unsuscribe From Our Internal Newsletter ᓚᘏᗢ</h4>
          </Col>
          <Col>
            {/* UNSUSCRIBE FORM */}
            <UnsuscribeForm></UnsuscribeForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UnsuscribePage;
