import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  }

  const handleInput = e => {
    setValue(e.target.value);
  }

  return (

    <form onSubmit={handleSubmit}>
      <Form.Label>
        <b>Add Todo</b>
      </Form.Label>
      <div className="Container">
        <input className="Todo__input"
          type="text"
          value={value}
          placeholder="Add new todo"
          onChange={handleInput}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}>
        </input>
        <button
          className="Button"
          type="submit"
          // disabled={!value}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
        > Add Todo</button>

      </div>
    </form>
  )
}
