import { Col, Container, Row, Table } from "react-bootstrap";
import FormCard from "../../../components/cards/FormCard";
import { getFiles } from "../../../services/upload-services/uploadService";
import ReturnToDashboardBreadcrumbs from "../../../components/navigation/dashboard/ReturnToDashboardBreadcrumbs";
import { useCallback, useEffect, useState } from "react";

const UploadedFilesPage = () => {
  // STATES
  const [data, setData] = useState([]);

  const getFileData = useCallback(async () => {
    let response = await getFiles();
    if (response.success) {
      setData(response.files);
    }
  }, []);

  useEffect(() => {
    getFileData();
  }, [getFileData]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <ReturnToDashboardBreadcrumbs></ReturnToDashboardBreadcrumbs>
          </Col>
          <Col>
            <FormCard
              title="Uploaded Files ᓚᘏᗢ"
              imageUrl="images/cat_rocket.jpg"
              alt="A Cat and Its Rocket"
            ></FormCard>
          </Col>
          <Col>
            <p>View uploaded files here 🐍.</p>
            {/* TABLE */}
            <Table striped="columns">
              <thead>
                <tr>
                  <th>|Title|</th>
                  <th>|Description|</th>
                  <th>|Link|</th>
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
        </Row>
      </Container>
    </>
  );
};

export default UploadedFilesPage;
