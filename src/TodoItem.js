import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
