import { Card, Col, Container, Row } from "react-bootstrap";
import ReturnToDashboardBreadcrumbs from "../../components/navigation/ReturnToDashboardBreadcrumbs";

const UploadedFilesPage = () => {
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
                  <h3>Uploaded Files ᓚᘏᗢ</h3>
                </Card.Title>
                <Card.Text>🦊.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadedFilesPage;
