import React from "react";

function Todo({todo, todos, setTodos, text}) {
    const finishHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        }))

    }

    const removeHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    return (
        <div className="to-do">
            <li>{text}</li>
            <button onClick={finishHandler} className={todo.completed ? "completed" : ""}>finish</button>
            <button onClick={removeHandler}>remove</button>
        </div>
    );
}

export default Todo;