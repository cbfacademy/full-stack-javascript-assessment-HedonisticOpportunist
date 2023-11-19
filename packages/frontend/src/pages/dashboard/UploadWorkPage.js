import { Card, Col, Container, Row } from "react-bootstrap";
import ReturnToDashboardBreadcrumbs from "../../components/navigation/ReturnToDashboardBreadcrumbs";
import UploadWorkForm from "../../components/forms/UploadWorkForm";

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
                  <h3>Upload Work ᓚᘏᗢ</h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <UploadWorkForm></UploadWorkForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadWorkPage;
