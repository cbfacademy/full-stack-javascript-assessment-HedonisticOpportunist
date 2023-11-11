import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const SignupPage = () => {
  const navigate = useNavigate();
  // States
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Toast Messages
  const handleError = () =>
    toast("👻 Error!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
    });

  const handleSuccess = () =>
    toast("🦄 Success!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
    });

  // Sign Up
  const signup = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/signup",
        {
          username,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setUserName(username);
    setEmail(email);
    setPassword(password);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    signup();
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
            <img src="images/cat_and_fish.jpg" alt="A Cat and a Fish" />
          </Col>
          <Col>
            <p>
              Already have an account? <Link to={"/login"}>Login</Link> ♡🐾
            </p>
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="formBasicUserName"
                required
              >
                <Form.Label>Username: </Form.Label>
                <Form.Control
                  type="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter username"
                  required
                />
              </Form.Group>
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
                />
              </Form.Group>
              <Button
                className="btn-grad"
                variant="outline-dark"
                type="submit"
                size="lg"
                onClick={handleSubmit}
              >
                🐾Register
              </Button>
            </Form>
          </Col>
          <Col>
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
