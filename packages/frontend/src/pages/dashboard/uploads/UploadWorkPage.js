import { Card, Col, Container, Row } from "react-bootstrap";
import FormCard from "../../../components/cards/FormCard";
import ReturnToDashboardBreadcrumbs from "../../../components/navigation/dashboard/ReturnToDashboardBreadcrumbs";
import UploadWorkForm from "../../../components/forms/upload/UploadWorkForm";

const UploadWorkPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <ReturnToDashboardBreadcrumbs></ReturnToDashboardBreadcrumbs>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h3>Upload Link to Your Interactive Art / Game ᓚᘏᗢ</h3>
                </Card.Title>
                <Card.Text>
                  Upload a link to your interactive art or game.
                </Card.Text>
                <Card.Text>
                  A moderator will have a look and then add it to the main page.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <FormCard
            title="Upload Your Work ^•^*"
            imageUrl="images/laptop_cat.png"
            alt="A Laptop Cat"
          ></FormCard>
          <Col>
            <UploadWorkForm></UploadWorkForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadWorkPage;
