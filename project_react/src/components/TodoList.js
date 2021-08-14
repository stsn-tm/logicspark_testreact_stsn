import React from "react";
import "../App.css";
import { Button, Form, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <Row className="justify-content-center">
        <Col md="1" xs="2">
          <Form.Check aria-label="option 1" onClick={() => markTodo(index)} />{" "}
        </Col>
        <Col md="9" xs="8">
          <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
            {todo.text}
          </span>
        </Col>
        <Col md="2" xs="2" className="d-flex justify-content-end ">
          <div>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => removeTodo(index)}
            >
              ✕
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>
        <b>Add Todo</b>
      </Form.Label>
      <Row>
        <Col md="10" xs="8">
          <Form.Group>
            <Form.Control
              type="text"
              className="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Add new todo"
            />
          </Form.Group>
        </Col>
        <Col md="2" xs="4">
          <Button variant="primary mb-3" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

function AppTodo() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h4 className="text-center mb-4">Todo List</h4>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <ListGroup>
              <ListGroup.Item className="mb-1">
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
