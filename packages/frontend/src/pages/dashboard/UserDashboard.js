import { Button, Card, Col, Container, Row } from "react-bootstrap";
import DashboardBreadcrumbs from "../../components/navigation/DashboardBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { messageConstants } from "../../constants/messageConstants";
import {
  getUserData,
  logout,
} from "../../services/authentication-services/authenticationService";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  // STATES
  const [logoutMessage, setLogoutMessage] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function getUser() {
      let data = await getUserData();
      if (data.status) {
        setUsername(data.user);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    }
    getUser();
  }, [navigate]);

  // HANDLE LOGOUT FUNCTION
  // Credit: @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
  // Any further modifications are mine and mine alone.
  const handleLogout = async () => {
    let response = await logout();
    if (response) {
      setLogoutMessage(messageConstants.LOGOUT_SUCCESS);
      localStorage.removeItem("token");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setLogoutMessage(messageConstants.LOGOUT_ERROR);
    }
  };

  // HANDLE SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogout();
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <DashboardBreadcrumbs></DashboardBreadcrumbs>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h3>User Dashboard ᓚᘏᗢ</h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* CAT IMAGE */}
            <LazyLoadImage
              className="image"
              src="images/cat_scientist.jpg"
              alt="A Cat Scientist"
            />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* WELCOME MESSAGE */}
                  <h4>Welcome {username}!</h4>
                </Card.Title>
                <Card.Text>It's good to see you again.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* LOGOUT BUTTON */}
            <Button
              className="btn-grad"
              variant="outline-dark"
              type="submit"
              size="lg"
              onClick={handleSubmit}
            >
              LOGOUT
            </Button>
          </Col>
          <Col>
            {/* LOGOUT STATUS MESSAGE */}
            <p>{logoutMessage}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserDashboard;
