import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";

const SignupPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Sign Up</h1>
          </Col>
          <Col>
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address: </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
