import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo,deleteTodo ,todo } from '../redux/actions';
import { Button, Form, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export const Todo = ({ todo,deleteTodo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);
  // const [content, setContent] = React.userState('');

  const handleCheked = () => dispatch(toggleTodo(todo.id));
  const handleDeleteTodo =(id) =>{ deleteTodo(todo.id)}


  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);


  // const Todo = ({ todo, toggleTodo }) => (
  //   <li className="todo-item">
  //     <div onClick={() => toggleTodo(todo.id)}>
  //       {todo && todo.completed ? "👌" : "👋"}{" "}
  //       <span
  //         className={cx(
  //           "todo-item__text",
  //           todo && todo.completed && "todo-item__text--completed"
  //         )}
  //       >
  //         {todo.content}
  //       </span>
  //     </div>
  //     <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
  //   </li>
  // );

  return (

    <div class="card border-primary mb-2">
      <div class="card-body ">
        <Row className="justify-content-center">
          <Col md="1" xs="2">
            <Form.Check aria-label="option 1" onChange={handleCheked} isChecked={cheked} />{" "}
          </Col>
          <Col md="9" xs="8">
            <span style={todo.completed ? { textDecoration: "line-through", textDecorationColor: "red" } : null}>
              {todo.content}
            </span>
          </Col>
          {/* <Col md="2" xs="2" className="d-flex justify-content-end ">
            <div>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleDeleteTodo()}
        
                  //console.log(dispatch(deleteTodo(id)));
              >
                ✕
              </Button>
            </div>
          </Col> */}
        </Row>
      </div>
    </div>
  )

  
}
