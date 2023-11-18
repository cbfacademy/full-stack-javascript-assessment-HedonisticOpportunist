import { Container, Col, Row } from "react-bootstrap";
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
            {/* PAGE TITLE */}
            <h3>Games</h3>
            <p>Find a collection of games below. </p>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Col>
            <h4>Chase Ball Game ♡</h4>
          </Col>
          <Col>
            {/* GAME LINK AND DESCRIPTION */}
            <a href="space-cats-art-and-games/chase-mouse-game/index.html">
              Catch the mice.
            </a>
            <p>WIP. Feel free to play the game, but be aware of bugs 🐛🐛.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GamesPage;
