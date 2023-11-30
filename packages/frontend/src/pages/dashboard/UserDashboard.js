import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import DashboardBreadcrumbs from "../../components/navigation/DashboardBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { localUrlConstants } from "../../constants/localUrlConstant";
import { prodUrlConstants } from "../../constants/prodUrlConstants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getURL } from "../../services/helpers/urlHelpers";
import { useCookies } from "react-cookie";

const UserDashboard = () => {
  const navigate = useNavigate();

  // STATES
  const [cookies, removeCookie] = useCookies([]);
  const [message, setMessage] = useState("");

  // VERIFY COOKIE FUNCTION
  // Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
  // Any further modifications are mine and mine alone.
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const dashboardUrl = getURL(dashboardUrl, "VIEW_DASHBOARD");
      const { data } = await axios.post(
        dashboardUrl,
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      return status
        ? setMessage(`Hello ${user}. Welcome to the dashboard!`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  // LOGOUT FUNCTION
  // Credit @ https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
  // Any further modifications are mine and mine alone.
  function Logout() {
    removeCookie("token");
    navigate("/signup");
  }

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
                  <h4>{message}</h4>
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
              onClick={Logout}
            >
              LOGOUT
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserDashboard;
