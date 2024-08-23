import { Card, Container, Col, Row } from "react-bootstrap";
import CreditsBreadcrumbs from "../../../../components/navigation/home/CreditsBreadcrumbs";
import CopyrightCard from "../../../../components/cards/CopyrightCard";

const DashboardCreditsPage = () => {
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
                  <h3>Dashboard Image Credits</h3>
                </Card.Title>
                {/* MAIN CONTENT */}
                <Card.Text>
                  The following images are used on the <i>Dashboard Page</i>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <CopyrightCard
              imageUrl="images/cat_scientist.jpg"
              alt="A Cat Scientist"
              url="https://www.facebook.com/Freepik/"
              creator="freepik"
            ></CopyrightCard>
            <CopyrightCard
              imageUrl="images/laptop_cat.png"
              alt="A Laptop Cat"
              url="https://www.facebook.com/Freepik/"
              creator="freepik"
            ></CopyrightCard>
            <CopyrightCard
              imageUrl="images/black_cat.png"
              alt="A Black Cat"
              url="https://www.facebook.com/Freepik/"
              creator="smashicons"
            ></CopyrightCard>
            <CopyrightCard
              imageUrl="images/pencil_cat.png"
              alt="A Pencil Cat"
              url="https://www.facebook.com/Freepik/"
              creator="smashicons"
            ></CopyrightCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardCreditsPage;
