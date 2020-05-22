 import React from 'react';

function Todo(props) {
  return (
      <div
       className="todo"
       style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
       >
       {props.todo.text}
       <div>
        <button onClick={() => props.completeTodo(props.index)}>Complete</button>
        <button onClick={() => props.removeTodo(props.index)}>x</button>
      </div>
    </div>
  );
}
export default Todo;
