import { Card, Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../../components/navigation/HomeBreadcrumbs";

const InteractiveArtPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h3>Interactive Art</h3>
                </Card.Title>
                <Card.Text>
                  Find an assortment of interactive art pieces below.
                </Card.Text>
                <Card.Text>
                  Please be aware that the interactive art loads on a new page.
                  To return to the homepage, hit the browser's back button.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* GAME TITLE */}
                  <h4>Floating Space Cat ♡</h4>
                </Card.Title>
                <Card.Text>
                  {/* ART LINK AND DESCRIPTION */}
                  <a href="space-cats-art-and-games/floating-astro-cat/index.html">
                    Move the floating space cat.
                  </a>
                </Card.Text>
                <Card.Text>
                  Move an image of a space cat using your mouse coordinates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* GAME TITLE */}
                  <h4>Many Cats ♡</h4>
                </Card.Title>
                <Card.Text>
                  {/* ART LINK AND DESCRIPTION */}
                  <a href="space-cats-art-and-games/cat-filling-up-screen/index.html">
                    Watch the scene fill up with many cats.
                  </a>
                </Card.Text>
                <Card.Text>
                  Watch the scene fill up with the same cat image across a
                  screen -- click 'Reload' to see it happen again.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InteractiveArtPage;
