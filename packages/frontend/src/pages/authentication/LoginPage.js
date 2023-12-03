import { Card, Col, Container, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../../components/navigation/HomeBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";

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
            <Card>
              <Card.Body>
                <Card.Title>
                  {/* PAGE TITLE */}
                  <h3>Login ᓚᘏᗢ</h3>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* CAT IMAGE */}
            <LazyLoadImage
              className="image"
              src="images/pink_astro_cat.jpg"
              alt="A Pink Astronaut Cat"
            />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                {/* MAIN CONTENT */}
                <Card.Text>Don't have an account?</Card.Text>
                <Card.Text>
                  <Link to={"/signup"}>Signup</Link> =ᗢ=
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="dashed"></hr>
          </Col>
          <Card>
            <Card.Body>
              <Card.Title>
                {/* LOGIN FORM TITLE*/}
                <h4>Login Here: ⋆⭒˚｡⋆ </h4>
              </Card.Title>
            </Card.Body>
          </Card>
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
