import "./App.css";
import NavbarComponent from "./components/Navbar";
import TodoList from "./components/TodoList";
import ImageCard from "./components/Card";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Container className="mt-5">
        <Row>
          <Col md="6" cols="12">
            <ImageCard />
          </Col>
          <Col md="6" cols="12" className="mt-3">
            <TodoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
