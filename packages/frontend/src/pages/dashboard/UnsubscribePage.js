import { Card, Col, Container, Row } from "react-bootstrap";
import ReturnToDashboardBreadcrumbs from "../../components/navigation/ReturnToDashboardBreadcrumbs";
import UnsubscribeForm from "../../components/forms/UnsubscribeForm";

const UnsubscribePage = () => {
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
                  <h3>Unsubscribe From Our Internal Newsletter ᓚᘏᗢ</h3>
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
                  {/* UNSUBSCRIBE FORM TITLE */}
                  <h4>Unsubscribe From Our Internal Newsletter ᓚᘏᗢ</h4>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* UNSUBSCRIBE FORM */}
            <UnsubscribeForm></UnsubscribeForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UnsubscribePage;
