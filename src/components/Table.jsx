import { ListGroup } from "react-bootstrap";

const Table = ({ selected, changeSelected }) => {
  const checkSelected = value => (value === selected ? "selected" : "");

  return (
    <>
      <ListGroup>
        <ListGroup.Item className={checkSelected("uno")} onClick={() => changeSelected("uno")}>
          Uno
        </ListGroup.Item>
        <ListGroup.Item className={checkSelected("due")} onClick={() => changeSelected("due")}>
          Due
        </ListGroup.Item>
        <ListGroup.Item className={checkSelected("tre")} onClick={() => changeSelected("tre")}>
          Tre
        </ListGroup.Item>
      </ListGroup>
      <p>Elemento attuale è: {selected || "non selezionato"}</p>
    </>
  );
};

export default Table;
