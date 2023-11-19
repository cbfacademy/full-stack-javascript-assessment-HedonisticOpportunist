import { Card, Container, Col, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../../components/navigation/HomeBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CreditsPage = () => {
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
                  <h3>Credits</h3>
                </Card.Title>
                {/* MAIN CONTENT */}
                <Card.Text>
                  A project never lives in isolation; the following images
                  helped make <i>Space Cats</i> the bright and happy place it is
                  now.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* IMAGE CREDITS */}
                  <h4>Image Credits</h4>
                </Card.Title>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/cat_moon.jpg"
                    alt="A Cat and a Moon"
                  />
                  <a href="https://www.facebook.com/moshimoshicatalyst">
                    Credit: catalyststuff/moshimoshicatalyst.
                  </a>
                </Card.Text>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/cat_rocket.jpg"
                    alt="A Cat and a Rocket"
                  />
                  <a href="https://www.facebook.com/moshimoshicatalyst">
                    Credit: catalyststuff/moshimoshicatalyst.
                  </a>
                </Card.Text>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/pink_astro_cat.jpg"
                    alt="A Pink Astronaut Cat"
                  />
                  <a href="https://storyset.com/">Credit: storyset</a>
                </Card.Text>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/cat_and_fish.jpg"
                    alt="A Cat and a Fish"
                  />
                  <a href="https://www.facebook.com/moshimoshicatalyst">
                    Credit: catalyststuff/moshimoshicatalyst.
                  </a>
                </Card.Text>
                <Card.Text>
                  {/* IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/space_cats_logo.png"
                    alt="Space Cat Logo"
                  />
                  <a href="https://logo.com/">Credit: LOGO.</a>
                </Card.Text>
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

export default CreditsPage;
