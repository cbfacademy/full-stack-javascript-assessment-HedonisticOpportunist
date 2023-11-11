import axios from "axios";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasLoggedIn, setLoginStatus] = useState(false);
  const [message, setMessage] = useState("");

  // Toast Messages
  const handleError = "👻 Error. Please try logging in again.";
  const handleSuccess = "🦄 Success! You have been logged in.";

  // Handle Message Function
  const handleDisplayMessages = () => {
    if (hasLoggedIn) {
      setMessage(handleSuccess);
    } else {
      setMessage(handleError);
    }
  };

  // Login Function
  const login = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(data);
      const success = data;
      if (success) {
        setLoginStatus(true);
      } else {
        setLoginStatus(false);
      }
    } catch (error) {
      console.log(error);
    }
    setEmail(email);
    setPassword(password);
  };

  // Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    login();
    handleDisplayMessages();
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Login</h1>
          </Col>
          <Col>
            {/* Breadcrumbs */}
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            <img src="images/pink_astro_cat.jpg" alt="A Pink Astronaut Cat" />
          </Col>
          <Col>
            <p>
              Don't have an account? <Link to={"/signup"}>Signup</Link> /ᐠ.ꞈ.ᐟ\
            </p>
          </Col>
          <Col>
            {/* Login Form */}
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
              {/* Login Button */}
              <Button
                className="btn-grad"
                variant="outline-dark"
                type="submit"
                size="lg"
                onClick={handleSubmit}
              >
                🐾Login
              </Button>
            </Form>
          </Col>
          <Col>
            {/* Login Success Message */}
            <p>{message}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
