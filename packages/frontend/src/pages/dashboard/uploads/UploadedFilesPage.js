import { Card, Col, Container, Row, Table } from "react-bootstrap";
import DeleteFileForm from "../../../components/forms/upload/DeleteFileForm";
import { getFiles } from "../../../services/upload-services/uploadService";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReturnToDashboardBreadcrumbs from "../../../components/navigation/ReturnToDashboardBreadcrumbs";
import { useEffect, useState } from "react";

const UploadedFilesPage = () => {
  // STATES
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getFileData() {
      let data = await getFiles();
      if (data.success) {
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
                <Card.Text>View uploaded files here 🐅.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* CAT IMAGE */}
            <LazyLoadImage
              className="mini-logo"
              src="images/pencil_cat.png"
              alt="A Pencil Cat"
            />
          </Col>
          <Col>
            {/* TABLE */}
            <Table striped="columns">
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
                    <td colSpan={2}>{item.title}</td>
                    <td colSpan={2}>{item.description}</td>
                    <td colSpan={2}>{item.url}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="dashed"></hr>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h4>Delete Link to Your Interactive Art / Game ᓚᘏᗢ</h4>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <DeleteFileForm></DeleteFileForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadedFilesPage;
