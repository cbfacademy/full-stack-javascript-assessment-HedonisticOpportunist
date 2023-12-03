import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { getFiles } from "../../services/upload-services/uploadService";
import ReturnToDashboardBreadcrumbs from "../../components/navigation/ReturnToDashboardBreadcrumbs";
import { useEffect, useState } from "react";

const UploadedFilesPage = () => {
  // STATES
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getFileData() {
      let data = await getFiles();
      if (data.success) {
        console.log(data.files);
        setData(data.files);
      }
    }
    getFileData();
  }, []);

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
                  <th>Title</th>
                  <th>Description</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.url}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadedFilesPage;
