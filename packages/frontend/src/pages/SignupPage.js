import { Col, Container, Row } from "react-bootstrap";
import HomeBreadcrumbs from "../components/HomeBreadcrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import SignupForm from "../forms/SignupForm";

const SignupPage = () => {
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
            <h3>Register</h3>
          </Col>
          <Col>
            <LazyLoadImage
              className="image"
              src="images/cat_and_fish.jpg"
              alt="A Cat and a Fish"
            />
          </Col>
          <Col>
            <p>
              Already have an account? <Link to={"/login"}>Login</Link> ♡🐾
            </p>
          </Col>
          <Col>
            {/* SIGN UP FORM */}
            <SignupForm></SignupForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupPage;
