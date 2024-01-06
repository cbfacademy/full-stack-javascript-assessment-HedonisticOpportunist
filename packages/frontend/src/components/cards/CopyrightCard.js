import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CopyrightCard = (props) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text>
            {/* IMAGE */}
            <LazyLoadImage
              className="mini-logo"
              src={props.imageUrl}
              alt={props.alt}
            />
            <a href={props.url}>Credit: {props.creator}.</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CopyrightCard;
