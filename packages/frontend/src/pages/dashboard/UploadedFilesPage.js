import { Card, Col, Container, Row, Table } from "react-bootstrap";
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
                <Card.Text>View uploaded files here🦊.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadedFilesPage;
