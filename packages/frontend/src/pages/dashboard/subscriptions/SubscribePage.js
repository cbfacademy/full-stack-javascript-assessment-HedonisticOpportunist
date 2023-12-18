import { Card, Col, Container, Row } from "react-bootstrap";
import FormCard from "../../../components/cards/FormCard";
import { Link } from "react-router-dom";
import ReturnToDashboardBreadcrumbs from "../../../components/navigation/dashboard/ReturnToDashboardBreadcrumbs";
import SubscribeForm from "../../../components/forms/subscriptions/SubscribeForm";

const SubscribePage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <ReturnToDashboardBreadcrumbs></ReturnToDashboardBreadcrumbs>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>
                {/* PAGE TITLE */}
                <h3>Welcome To Our Internal Newsletter ᓚᘏᗢ</h3>
              </Card.Title>
              {/* MAIN CONTENT */}
              <Card.Text>
                If you want to keep in touch with any moderator-approved art or
                games, please sign up for our newsletter.
              </Card.Text>
              <Card.Text>
                You can subscribe using the email you signed up with or another
                one. It's up to you!
              </Card.Text>
              <Card.Text>
                <Link to="/unsubscribe">
                  Of course, you are welcome to unsubscribe at any time ♡🐾.
                </Link>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="dashed"></hr>
          </Col>
          <Col>
            <FormCard
              title="Subscribe To Our Internal Newsletter ᓚᘏᗢ"
              imageUrl="images/black_cat.pn"
              alt="A Black Cat"
            ></FormCard>
          </Col>
          <Col>
            {/* SUBSCRIBE FORM */}
            <SubscribeForm></SubscribeForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubscribePage;
