import React, { useState } from 'react';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
    const [todos, setTodos] = useState([
        { id: 1, name: 'Learn React', completed: false },
        { id: 2, name: 'Build a To-Do App', completed: true },
    ]);

    const [filter, setFilter] = useState('all'); // Options: 'all', 'completed', 'pending'

    const addTodo = (name) => {
        setTodos([...todos, { id: Date.now(), name, completed: false }]);
    };

    const toggleCompletion = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
    });

    return (
        <div className="container mt-4">
            <h1 className="text-center">To-Do App</h1>
            <FilterBar setFilter={setFilter} addTodo={addTodo} />
            <TodoList todos={filteredTodos} toggleCompletion={toggleCompletion} />
        </div>
    );
}

export default App;
