import React, { useState } from 'react';

const AddNewTodo = ({ addTodo }) => {
    const [todos, setTodos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todos)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>To do</label>
            <input type="text" id="todo" onChange={(e) => setTodos(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default AddNewTodo;