import { Card, Container, Col, Row } from "react-bootstrap";
import CreativeCard from "../../components/cards/CreativeCard";
import HomeBreadcrumbs from "../../components/navigation/home/HomeBreadcrumbs";

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
                  So that you know, the interactive art loads on a new page. To
                  return to the homepage, and hit the browser's back button.
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
              title="Floating Space Cat"
              url="space-cats-art-and-games/floating-astro-cat/index.html"
              imageUrl="images/cat.png"
              alt="A Cat"
              description="Move an image of a space cat using your mouse coordinates."
            ></CreativeCard>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="divider"></hr>
          </Col>
          <Col>
            <CreativeCard
              title="Many Cats"
              url="space-cats-art-and-games/cat-filling-up-screen/index.html"
              imageUrl="images/unicorn.png"
              alt="A Unicorn Cat"
              description=" Watch the scene fill up with the same cat image across a
              screen -- click 'Reload' to see it happen again."
            ></CreativeCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InteractiveArtPage;
