import { Card, Container, Col, Row } from "react-bootstrap";
import CreativeCard from "../../components/cards/CreativeCard";
import HomeBreadcrumbs from "../../components/navigation/home/HomeBreadcrumbs";

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
            <CreativeCard
              title="Chase Bubbles Game"
              url="space-cats-art-and-games/catch-bubbles-game/index.html"
              imageUrl="images/kitty.png"
              alt="A Cat Hero"
              description="Try and catch ten bubbles 🫧."
            ></CreativeCard>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Col>
            <CreativeCard
              title="Space Bubble Shooter Game"
              url="space-cats-art-and-games/space-bubbles-shooter-game/index.html"
              imageUrl="images/pet.png"
              alt="A Cat"
              description="Shoot or catch twenty bubbles 🫧👾."
            ></CreativeCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GamesPage;
