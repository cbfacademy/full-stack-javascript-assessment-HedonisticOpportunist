import { Card } from "react-bootstrap";
const MessageDisplay = (props) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text className="msg">{props.message}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MessageDisplay;
