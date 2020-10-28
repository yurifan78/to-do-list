import './App.css';
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        filterTodosWithStatus();
    }, [todos, status]);

    const filterTodosWithStatus = () => {
        if (status === "completed") {
            setFilteredTodos(todos.filter(todo => todo.completed === true));
        } else if (status === "uncompleted") {
            setFilteredTodos(todos.filter(todo => todo.completed === false));
        } else if (status === "all") {
            setFilteredTodos(todos);
        }
    }

    return (
    <div className="App">
        <header><h3>Yue's to-do list</h3></header>
        <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            status={status}
            setStatus={setStatus}
        />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
