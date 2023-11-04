import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";
import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:5000/register",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Register</h1>
          </Col>
          <Col>
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address: </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button
                className="btn-grad"
                variant="outline-dark"
                type="submit"
                onClick={(e) => handleSubmit(e)}
                size="lg"
              >
                🐾Register
              </Button>
            </Form>
          </Col>
          <Col>
            {register ? (
              <p className="text-success">You have registered successfully.</p>
            ) : (
              <p className="text-danger">You have not been registered.</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterPage;
