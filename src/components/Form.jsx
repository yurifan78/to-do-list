import React from "react";

function Form({inputText, setInputText, todos, setTodos, status, setStatus}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {id: Math.random() * 10, text: inputText, completed: false}
        ]);
        setInputText("");
    }

    const filterStatusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div className="form">
            <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Add here..." />
            <button onClick={submitTodoHandler}>Add</button>
            <select onChange={filterStatusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    );
}

export default Form;