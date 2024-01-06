import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
const FormCard = (props) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            {/* FORM TITLE*/}
            <h4>{props.title} ♡</h4>
          </Card.Title>
          <Card.Text>
            {/* CAT IMAGE */}
            <LazyLoadImage
              className="image"
              src={props.imageUrl}
              alt={props.alt}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default FormCard;
