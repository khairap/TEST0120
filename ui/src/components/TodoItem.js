import React from 'react';

function TodoItem({ todo, toggleCompletion }) {
    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? 'list-group-item-success' : ''
            }`}
        >
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.name}
            </span>
            <button
                className={`btn btn-${todo.completed ? 'secondary' : 'primary'} btn-sm`}
                onClick={() => toggleCompletion(todo.id)}
            >
                {todo.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
        </li>
    );
}

export default TodoItem;
