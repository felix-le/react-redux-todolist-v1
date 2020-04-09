import React from "react";
import Button from "../../../components/Button";

const TodoList = props => {
  return (
    <>
      <ul id="todoList">
        {props.todos.length > 0
          ? props.todos.map((todo, index) => {
            return (
              <li key={todo.id} className="well">
                <label className={`${todo.isCompleted ? "completed" : ""}`}>{todo.title}</label>
                <Button
                  handleClick={() => props.completedTodo(todo.id)}
                  bgColor="btn-success"
                  newAttributes={`${todo.isCompleted ? "btn-completed" : ""}`}
                  nameBtn={`${todo.isCompleted ? "Completed" : "Complete"}`}
                />
                <Button
                  handleClick={() => props.deleteTodo(todo.id)}
                  bgColor="btn-danger"
                  nameBtn="Delete"
                />
                <p> {todo.description}</p>
              </li>
            );
          })
          : null}
      </ul>
    </>
  );
};
export default TodoList;
