import { Card, Container, Col, Row } from "react-bootstrap";
import CreditsBreadcrumbs from "../../../../components/navigation/home/CreditsBreadcrumbs";
import CopyrightCard from "../../../../components/cards/CopyrightCard";

const ImageCreditsPage = () => {
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
                  <h3>Image Credits Page</h3>
                </Card.Title>
                {/* MAIN CONTENT */}
                <Card.Text>
                  The following page displays the images used throughout the
                  main pages of
                  <i> Space Cats</i>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <CopyrightCard
              imageUrl="images/cat_moon.jpg"
              alt="A Cat and a Moon"
              url="https://www.facebook.com/moshimoshicatalyst/"
              creator="catalyststuff/moshimoshicatalyst"
            ></CopyrightCard>
            <CopyrightCard
              imageUrl="images/cat_rocket.jpg"
              alt="A Cat and a Rocket"
              url="https://www.facebook.com/moshimoshicatalyst/"
              creator="catalyststuff/moshimoshicatalyst"
            ></CopyrightCard>
            <CopyrightCard
              imageUrl="images/pink_astro_cat.jpg"
              alt="A Pink Astronaut Cat"
              url="https://storyset.com/"
              creator="storyset"
            ></CopyrightCard>
            <CopyrightCard
              imageUrl="images/cat_and_fish.jpg"
              alt="A Cat and a Fish"
              url="https://www.facebook.com/moshimoshicatalyst/"
              creator="catalyststuff/moshimoshicatalys"
            ></CopyrightCard>
            <CopyrightCard
              imageUrl="images/space_cats_logo.png"
              alt="Space Cat Logo"
              url="https://logo.com/"
              creator="LOGO"
            ></CopyrightCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ImageCreditsPage;
