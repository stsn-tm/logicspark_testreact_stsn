import logo from './logo.svg';
import './App.scss';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import ImageCard from "./components/Card";
import { Row, Col, Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbar";

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
          <AddTodo />
       <TodoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
