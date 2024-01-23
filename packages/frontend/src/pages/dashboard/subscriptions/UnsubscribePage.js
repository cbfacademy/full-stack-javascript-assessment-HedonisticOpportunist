import { Card, Col, Container, Row } from "react-bootstrap";
import FormCard from "../../../components/cards/FormCard";
import ReturnToDashboardBreadcrumbs from "../../../components/navigation/dashboard/ReturnToDashboardBreadcrumbs";
import UnsubscribeForm from "../../../components/forms/subscriptions/UnsubscribeForm";

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
            <FormCard
              title="Unsubscribe From Our Internal Newsletter ᓚᘏᗢ"
              imageUrl="images/cat_moon.jpg"
              alt="A Cat and Its Moon"
            ></FormCard>
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
