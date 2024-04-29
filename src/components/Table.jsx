import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Table extends Component {
  // state = {
  //   selected: null
  // };

  checkSelected = value => (value === this.props.selected ? "selected" : "");

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item className={this.checkSelected("uno")} onClick={() => this.props.changeSelected("uno")}>
            Uno
          </ListGroup.Item>
          <ListGroup.Item className={this.checkSelected("due")} onClick={() => this.props.changeSelected("due")}>
            Due
          </ListGroup.Item>
          <ListGroup.Item className={this.checkSelected("tre")} onClick={() => this.props.changeSelected("tre")}>
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p>Elemento attuale è: {this.props.selected || "non selezionato"}</p>
      </>
    );
  }
}

export default Table;
