import { Card, Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../../components/navigation/home/HomeBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GamesPage = () => {
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
                  <h3>Games</h3>
                </Card.Title>
                <Card.Text>You can find a collection of games below.</Card.Text>
                <Card.Text>
                  The games load on a new page. To return to the homepage, hit
                  the browser's back button.
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
                  <h4>Chase Bubbles Game ♡</h4>
                </Card.Title>
                <Col>
                  {/* CAT IMAGE LINK */}
                  <a href="space-cats-art-and-games/catch-bubbles-game/index.html">
                    <LazyLoadImage
                      className="mini-logo"
                      src="images/kitty.png"
                      alt="A Cat Hero"
                    />
                  </a>
                </Col>
                {/* GAME DESCRIPTION */}
                <Card.Text>Try and catch ten bubbles 🫧.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Card>
            <Card.Body>
              <Card.Title>
                {/* GAME TITLE */}
                <h4>Space Bubble Shooter Game ♡</h4>
              </Card.Title>
              <Col>
                {/* CAT IMAGE LINK */}
                <a href="space-cats-art-and-games/space-bubbles-shooter-game/index.html">
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/pet.png"
                    alt="A Cat Hero"
                  />
                </a>
              </Col>
              <Card.Text>Shoot or catch twenty bubbles 🫧👾.</Card.Text>
            </Card.Body>
          </Card>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default GamesPage;
