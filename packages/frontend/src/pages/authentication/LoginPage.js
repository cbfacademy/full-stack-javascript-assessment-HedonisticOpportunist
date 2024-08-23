import { Card, Col, Container, Row } from "react-bootstrap";
import FormCard from "../../components/cards/FormCard";
import HomeBreadcrumbs from "../../components/navigation/home/HomeBreadcrumbs";
import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/authentication/LoginForm";

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
            <Card>
              <Card.Body>
                {/* MAIN CONTENT */}
                <Card.Text>Don't have an account?</Card.Text>
                <Card.Text>
                  <Link to={"/signup"}>Sign up</Link> =ᗢ=
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* DIVIDER */}
            <hr className="dashed"></hr>
          </Col>
          <FormCard
            title="Login Here: ⋆⭒˚｡⋆ "
            imageUrl="images/pink_astro_cat.jpg"
            alt="A Pink Astronaut Cat"
          ></FormCard>
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
