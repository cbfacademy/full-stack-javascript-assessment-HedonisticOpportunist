import { Card, Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../../components/navigation/HomeBreadcrumbs";

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
                <Card.Text>Find a collection of games below.</Card.Text>
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
                  <h4>Chase Ball Game ♡</h4>
                </Card.Title>
                <Card.Text>
                  {/* GAME LINK AND DESCRIPTION */}
                  <a href="space-cats-art-and-games/chase-mouse-game/index.html">
                    Catch the mice.
                  </a>
                </Card.Text>
                <Card.Text>
                  WIP. Feel free to play the game, but be aware of bugs 🐛🐛.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GamesPage;
