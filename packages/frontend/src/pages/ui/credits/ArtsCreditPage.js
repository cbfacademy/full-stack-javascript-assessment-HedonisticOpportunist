import { Card, Container, Col, Row } from "react-bootstrap";
import CreditsBreadcrumbs from "../../../components/navigation/CreditsBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ArtsCreditsPage = () => {
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
                  <h3>Interactive Art Image Credits</h3>
                </Card.Title>
                {/* MAIN CONTENT */}
                <Card.Text>
                  The following images are used on the{" "}
                  <i>Interactive Arts Page</i>.
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
                    src="images/cat.png"
                    alt="A Cat"
                  />
                  <a href="https://www.flaticon.com//">Credit: Flaticon.</a>
                </Card.Text>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/unicorn.png"
                    alt="A Unicorn Cat"
                  />
                  <a href="https://www.flaticon.com//">Credit: Flaticon.</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArtsCreditsPage;
