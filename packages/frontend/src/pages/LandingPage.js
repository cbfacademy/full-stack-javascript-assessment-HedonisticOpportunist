import { Container, Col, Row } from "react-bootstrap";
import Subscribe from "../components/Subscribe";

const LandingPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <img src="/images/cat_moon.jpg" alt="A Cat and a Moon" />
            <img src="images/cat_rocket.jpg" alt="A Cat and a Rocket" />
          </Col>
          <Col>
            <h2> Silly Games and ... Cats!</h2>
            <p>
              <b>Space Cats </b> is your friendly haunt on the web for playing
              or viewing cute and silly things.
            </p>
            <p>Feel free to explore ₍^._.^₎ 𐒡.</p>
          </Col>
          <Col>
            <Subscribe></Subscribe>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
