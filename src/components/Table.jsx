import { ListGroup } from "react-bootstrap";

const Table = props => {
  const checkSelected = value => (value === props.selected ? "selected" : "");

  return (
    <>
      <ListGroup>
        <ListGroup.Item className={checkSelected("uno")} onClick={() => props.changeSelected("uno")}>
          Uno
        </ListGroup.Item>
        <ListGroup.Item className={checkSelected("due")} onClick={() => props.changeSelected("due")}>
          Due
        </ListGroup.Item>
        <ListGroup.Item className={checkSelected("tre")} onClick={() => props.changeSelected("tre")}>
          Tre
        </ListGroup.Item>
      </ListGroup>
      <p>Elemento attuale è: {props.selected || "non selezionato"}</p>
    </>
  );
};

export default Table;
