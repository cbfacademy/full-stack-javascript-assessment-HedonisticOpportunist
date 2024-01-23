import { Button } from "react-bootstrap";
const FormButton = (props) => {
  return (
    <>
      <Button
        className="btn-grad"
        variant="outline-dark"
        type="submit"
        size="lg"
        onClick={props.submitFunction}
      >
        {props.buttonText}
      </Button>
    </>
  );
};

export default FormButton;
