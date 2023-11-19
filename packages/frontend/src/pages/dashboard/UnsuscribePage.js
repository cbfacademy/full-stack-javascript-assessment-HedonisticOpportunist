import { Card, Col, Container, Row } from "react-bootstrap";
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
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h3>Unsuscribe From Our Internal Newsletter ᓚᘏᗢ</h3>
                </Card.Title>
                <Card.Text>We're sad to see you go! 🦊.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="dashed"></hr>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* UNSUSCRIBE FORM TITLE */}
                  <h4>Unsuscribe From Our Internal Newsletter ᓚᘏᗢ</h4>
                </Card.Title>
              </Card.Body>
            </Card>
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
