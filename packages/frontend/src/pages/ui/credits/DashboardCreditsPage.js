import { Card, Container, Col, Row } from "react-bootstrap";
import CreditsBreadcrumbs from "../../../components/navigation/CreditsBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DashboardCreditsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <CreditsBreadcrumbs></CreditsBreadcrumbs>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h3>Dashboard Image Credits</h3>
                </Card.Title>
                {/* MAIN CONTENT */}
                <Card.Text>
                  The following images are used on the <i>Dashboard Page</i>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/cat_scientist.jpg"
                    alt="A Cat Scientist"
                  />
                  <a href="https://www.facebook.com/Freepik/">
                    Credit: freepik.
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardCreditsPage;
