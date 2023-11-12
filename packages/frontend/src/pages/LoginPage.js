import { Col, Container, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {/* BREADCRUMBS */}
            <HomeBreadcrumbs></HomeBreadcrumbs>
          </Col>
          <Col>
            {/* PAGE TITLE */}
            <h3>Login</h3>
          </Col>
          <Col>
            <LazyLoadImage
              className="image"
              src="images/pink_astro_cat.jpg"
              alt="A Pink Astronaut Cat"
            />
          </Col>
          <Col>
            <p>
              Don't have an account? <Link to={"/signup"}>Signup</Link> /ᐠ.ꞈ.ᐟ\
            </p>
          </Col>
          <Col>
            {/* LOGIN FORM */}
            <LoginForm></LoginForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
