import { Card, Container, Col, Row } from "react-bootstrap";
import SubscribeForm from "../components/SubscribeForm";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [data, setData] = useState(null);

  // Display date and time
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
            {/* Landing Page Welcome Message */}
            <p>{!data ? "ᓚᘏᗢ-…ᘛ⁐̤ᕐᐷ 🧀 Loading ..." : data}</p>
          </Col>
          <Col>
            {/* Landing Page Images */}
            <img src="/images/cat_moon.jpg" alt="A Cat and a Moon" />
            <img src="images/cat_rocket.jpg" alt="A Cat and a Rocket" />
          </Col>
          <Col>
            {/* Landing Page Content */}
            <Card>
              <Card.Body>
                <h2> Silly Games and ... Cats!</h2>
                <Card.Text>
                  <b>Space Cats </b> is your friendly haunt on the web for
                  playing or viewing cute and silly things.
                </Card.Text>
                <Card.Text>Feel free to explore ₍^._.^₎ 𐒡</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* Subscribe Form */}
            <SubscribeForm></SubscribeForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
