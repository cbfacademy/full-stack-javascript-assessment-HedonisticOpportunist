import { Container, Col, Row, Table } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";

const ArtsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Art</h1>
          </Col>
          <Col>
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>Floating Space Cat</th>
                  <th>Many Cats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <img
                      className="card-img"
                      src="images/floating_cat.png"
                      alt="A Cat and a Moon"
                    />
                    <a href="space-cat-art/floating-astro-cat/index.html">
                      Move the floating space cat.
                    </a>
                  </td>
                  <td colSpan={2}>
                    <img
                      className="card-img"
                      src="images/floating_cat.png"
                      alt="A Cat and a Moon"
                    />
                    <a href="space-cat-art/cat-filling-up-screen/index.html">
                      Watch the scene fill up with many cats.
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArtsPage;
