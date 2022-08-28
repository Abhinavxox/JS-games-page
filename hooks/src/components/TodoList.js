import React, { useEffect, useState } from 'react';
import AddNewTodo from './AddNewTodo';

const TododList = () => {
    const [todos, setTodos] = useState([
        { text: 'Pay bills', id: 1 },
        { text: 'Do your homework', id: 2 },
        { text: 'Feed the dog', id: 3 },
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text: text, id: todos.length + 1 }
        ])
    }

    useEffect(() => {
        console.log('use effect', todos)
    }, [todos])


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
            <button onClick={() => { setCount(count + 1) }}>Score: {count}</button>
        </div>
    )
}

export default TododList