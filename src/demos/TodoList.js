import React, { useState } from 'react';

const TodoList = () => {
    // useState to create a stateful value and a function to update it
    const [todos, setTodos] = useState([1, 2, 3, 4, 5, 6]);
    const [userInput, setUserInput] = useState('');

    // Functions to create full CRUD
    const addTodo = () => {
        // create a new array adding a new todo item
        const updatedTodos = [...todos, userInput];
        // use the function from the hook to update the todos
        setTodos(updatedTodos);
        // clear the user input on state
        setUserInput('');
    };

    const updateTodo = (i) => {
        // find the todo with matching index & reassign value
        const mappedTodos = todos.map((todo, index) => {
            if(i === index){
                todo = userInput;
            }
            return todo;
        })
        // update the todos on state
        setTodos(mappedTodos);
        // clear user input
        setUserInput('');
    };

    const removeTodo = (i) => {
        // filter the todos
        const filteredTodos = todos.filter((todo, index) => {
            return index !== i;
        });
        // update the todos on state
        setTodos(filteredTodos);
    };

    // return jsx
    return (
        <div style={{
            textAlign: 'center'
        }}>
            {
                // render a list of todos
                todos.map((todo, index) => (
                    <div>
                        <h1>{todo}</h1>
                        <button onClick={() => removeTodo(index)}>X</button>
                        <input type="text" onChange={(event) => setUserInput(event.target.value)}/>
                        <button onClick={() => updateTodo(index)}>Update</button>
                    </div>
                ))
            }
            <input type="text" onChange={(event) => setUserInput(event.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
};

export default TodoList;