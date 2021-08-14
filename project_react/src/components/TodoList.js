
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos, visibilityFilter } = useSelector(state => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (

      <div class="card-body">
      {filterTodos.length ?
        filterTodos.map(todo => (
          <Todo key={`todo-${todo.id}`} todo={todo} />
        ))
        : ''}
    </div>
  )
}
