import { Card, Container, Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [data, setData] = useState(null);

  // Display Date and Time Function
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* WELCOME MESSAGE */}
            <p>{!data ? "ᓚᘏᗢ-…ᘛ⁐̤ᕐᐷ 🧀 Loading ..." : data}</p>
          </Col>
          <Col>
            {/* IMAGES */}
            <LazyLoadImage
              className="image"
              src="/images/cat_moon.jpg"
              alt="A Cat and a Moon"
            />
            <LazyLoadImage
              className="image"
              src="images/cat_rocket.jpg"
              alt="A Cat and a Rocket"
            />
          </Col>
          <Col>
            {/* MAIN CONTENT */}
            <Card>
              <Card.Body>
                <h2> Silly Games and ... Cats!</h2>
                <Card.Text>
                  <b>Space Cats </b> is your friendly haunt on the web for
                  playing silly games.
                </Card.Text>
                <Card.Text>Feel free to explore ₍^._.^₎ 𐒡</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
