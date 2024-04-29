import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Table from "./components/Table";
import Detail from "./components/Detail";
import { Component } from "react";

class App extends Component {
  // lo stato in questo livello diventa l'unica fonte di verità per questo dato
  // che farà aggiornare i componenti che sono in lettura di esso tramite le loro props!
  state = {
    selected: null
  };

  // stiamo creando una funzione che ci permetterà di cambiare lo stato IN QUESTO LIVELLO (lo stato di App), da un livello inferiore (da un child)
  changeSelected = newValue => {
    this.setState({ selected: newValue });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table selected={this.state.selected} changeSelected={this.changeSelected} />
              </Col>
              <Col>
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
