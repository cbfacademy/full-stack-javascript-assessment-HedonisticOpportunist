import { Card, Col, Container, Row } from "react-bootstrap";
import ChangeEmailForm from "../../../components/forms/user/ChangeEmailForm";
import ChangeUserNameForm from "../../../components/forms/user/ChangeUserNameForm";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReturnToDashboardBreadcrumbs from "../../../components/navigation/dashboard/ReturnToDashboardBreadcrumbs";

const ChangeUserSettingsPage = () => {
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
                  <h3>Change User Settings ᓚᘏᗢ</h3>
                </Card.Title>
                <Card.Text>Change your username or email here.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Card>
            <Card.Body>
              <h4> Change Your Email or Username^•^* </h4>
              <Card.Text>
                {/* CAT IMAGE */}
                <LazyLoadImage
                  className="mini-logo"
                  src="images/cat_and_fish.jpg"
                  alt="A Cat and Its Fish"
                />
              </Card.Text>
            </Card.Body>
          </Card>
          <Col>
            {/* CHANGE EMAIL FORM */}
            <ChangeEmailForm></ChangeEmailForm>
          </Col>
          <Col>
            {/* CAT IMAGE */}
            <LazyLoadImage
              className="mini-logo"
              src="images/cat_rocket.jpg"
              alt="A Cat and Its Rocket"
            />
          </Col>
          <Col>
            {/* CHANGE USERNAME FORM */}
            <ChangeUserNameForm></ChangeUserNameForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChangeUserSettingsPage;
