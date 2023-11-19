import { Col, Container, Row } from "react-bootstrap";
import ReturnToDashboardBreadcrumbs from "../../components/navigation/ReturnToDashboardBreadcrumbs";
import SubscribeForm from "../../components/forms/SubscribeForm";

const SuscribePage = () => {
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
            <h3>Welcome To Our Internal Newsletter ᓚᘏᗢ</h3>
          </Col>
          <Col>
            <p>
              If you want to keep in touch with any moderator-approved art or
              games, please sign up for our newsletter.
            </p>
          </Col>
          <Col>
            <p>
              You can subscribe using the email you signed up with or another
              one. It's up to you!
            </p>
          </Col>
          <Col>
            <p>
              Of course, you are welcome to unsubscribe at any time via email.
            </p>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Col>
            <h4>Suscribe To Our Internal Newsletter ᓚᘏᗢ</h4>
          </Col>
          <Col>
            {/* SUSCRIBE FORM */}
            <SubscribeForm></SubscribeForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SuscribePage;
