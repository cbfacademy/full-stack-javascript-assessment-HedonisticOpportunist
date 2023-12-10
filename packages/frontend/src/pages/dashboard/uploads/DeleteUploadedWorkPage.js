import { Card, Col, Container, Row } from "react-bootstrap";
import DeleteFileForm from "../../../components/forms/upload/DeleteFileForm";
import { getFiles } from "../../../services/upload-services/uploadService";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReturnToDashboardBreadcrumbs from "../../../components/navigation/dashboard/ReturnToDashboardBreadcrumbs";
import { useEffect, useState } from "react";

const DeleupteUploadedWorkPage = () => {
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
  }, [data]);

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
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h4>Title to Your Interactive Art / Game ᓚᘏᗢ</h4>
                </Card.Title>
                <Card.Text>
                  {/* CAT IMAGE */}
                  <LazyLoadImage
                    className="mini-logo"
                    src="images/pencil_cat.png"
                    alt="A Pencil Cat"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
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
