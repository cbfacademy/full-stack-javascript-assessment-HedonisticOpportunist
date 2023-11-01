import { Button, Container, Col, Form, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Login</h1>
          </Col>
          <Col>
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            Don't have an account? Then,
            <Link to="/sign-up"> please sign up.</Link>
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
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
