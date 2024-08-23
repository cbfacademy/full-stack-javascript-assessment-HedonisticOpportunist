import { Container, Col, Row } from "react-bootstrap";
import React, { useMemo } from "react";

const Copyright = () => {
  const year = useMemo(function () {
    return new Date().getFullYear();
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <footer className="footer">
              ©<span>{year}</span> by Anita Pal
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Copyright;
