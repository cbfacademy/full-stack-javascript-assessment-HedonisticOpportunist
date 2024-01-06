import { Card, Container, Col, Row } from "react-bootstrap";
import CreditsBreadcrumbs from "../../../../components/navigation/home/CreditsBreadcrumbs";
import CopyrightCard from "../../../../components/cards/CopyrightCard";

const ArtsCreditsPage = () => {
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
                  <h3>Interactive Art Image Credits</h3>
                </Card.Title>
                {/* MAIN CONTENT */}
                <Card.Text>
                  The following images are used on the{" "}
                  <i>Interactive Arts Page</i>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <CopyrightCard
              imageUrl="images/cat.png"
              alt="A Cat"
              url="https://www.flaticon.com/"
              creator="Flaticon"
            ></CopyrightCard>
            <CopyrightCard
              imageUrl="images/unicorn.png"
              alt="A Unicorn Cat"
              url="https://www.flaticon.com/"
              creator="Flaticon"
            ></CopyrightCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArtsCreditsPage;
