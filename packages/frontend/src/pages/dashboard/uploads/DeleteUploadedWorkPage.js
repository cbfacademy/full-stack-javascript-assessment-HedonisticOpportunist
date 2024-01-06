import { Card, Col, Container, Row } from "react-bootstrap";
import FormCard from "../../../components/cards/FormCard";
import DeleteFileForm from "../../../components/forms/upload/DeleteFileForm";
import ReturnToDashboardBreadcrumbs from "../../../components/navigation/dashboard/ReturnToDashboardBreadcrumbs";

const DeleupteUploadedWorkPage = () => {
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
                  <h3>Delete Files ᓚᘏᗢ</h3>
                </Card.Title>
                <Card.Text>Select files to delete here 🐸.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="dashed"></hr>
          </Col>
          <Col>
            <FormCard
              title="Title to Your Interactive Art / Game ᓚᘏᗢ"
              imageUrl="images/pencil_cat.png"
              alt="A Pencil Cat"
            ></FormCard>
          </Col>
          <Col>
            {/* DELETE FIlE FORM */}
            <DeleteFileForm></DeleteFileForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DeleupteUploadedWorkPage;
