import { Card, Container, Col, Row } from "react-bootstrap";
import CreditsBreadcrumbs from "../../../../components/navigation/home/CreditsBreadcrumbs";
import CopyrightCard from "../../../../components/cards/CopyrightCard";

const GameCreditsPage = () => {
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
                  <h3>Game Image Credits</h3>
                </Card.Title>
                {/* MAIN CONTENT */}
                <Card.Text>
                  The following images are used on the <i>Games Page</i>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <CopyrightCard
              imageUrl="images/kitty.png"
              alt="A Cat Hero"
              url="https://www.flaticon.com/"
              creator="Flaticon"
            ></CopyrightCard>
            <CopyrightCard
              imageUrl="images/pet.png"
              alt="A Playful Cat"
              url="https://www.flaticon.com/"
              creator="Flaticon"
            ></CopyrightCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GameCreditsPage;
