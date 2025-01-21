import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleCompletion }) {
    return (
        <ul className="list-group mt-3">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleCompletion={toggleCompletion}
                />
            ))}
        </ul>
    );
}

export default TodoList;
