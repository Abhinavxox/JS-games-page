import React, { useState } from 'react';
import AddNewTodo from './AddNewTodo';

const TododList = () => {
    const [todos, setTodos] = useState([
        { text: 'Pay bills', id: 1 },
        { text: 'Do your homework', id: 2 },
        { text: 'Feed the dog', id: 3 },
    ]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text: text, id: todos.length + 1 }
        ])
    }

    return (
        <div className='ui list'>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.text}</li>
                    )
                })
                }
            </ul>
            <AddNewTodo addTodo={addTodo} />
        </div>
    )
}

export default TododList