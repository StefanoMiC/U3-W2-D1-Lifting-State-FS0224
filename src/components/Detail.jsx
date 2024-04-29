import { Alert } from "react-bootstrap";

const Detail = props => {
  return <Alert>Stai visualizzando l'elemento numero: {props.selected || "non selezionato"}</Alert>;
};

export default Detail;
