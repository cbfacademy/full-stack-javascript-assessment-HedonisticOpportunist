import { Card } from "react-bootstrap";
const ErrorMessage = (props) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text className="error-msg">
            {!props.error ? "" : props.error}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ErrorMessage;
