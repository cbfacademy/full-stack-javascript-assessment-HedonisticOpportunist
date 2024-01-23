import { Card, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CreativeCard = (props) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            {/* TITLE */}
            <h4>{props.title} ♡</h4>
          </Card.Title>
          <Col>
            {/* CAT IMAGE LINK */}
            <a href={props.url}>
              <LazyLoadImage
                className="mini-logo"
                src={props.imageUrl}
                alt={props.alt}
              />
            </a>
          </Col>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CreativeCard;
