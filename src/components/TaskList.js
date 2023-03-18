import { useState } from "react";

import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

import styles from "../styles/TaskList.module.css";


export default function TaskList() {
    const [todos, setTodos] = useState([])
    const [notDoneCount, setNotDoneCount] = useState(0)
    const [inputText, setInputText] = useState("")

    // Find the task position in the todos array using its id
    const getIndexById = (id) => {
        return todos.findIndex(todo => todo.id === id);
    }

    // Put uncompleted tasks above and update the notDoneCount
    const sortTodos = (messyTodos) => {
        const doneTodos = messyTodos.filter((todo) => todo.isDone === true)
        const notDoneTodos = messyTodos.filter((todo) => todo.isDone === false)
        setNotDoneCount(notDoneTodos.length)
        const sortedTodos = [...notDoneTodos, ...doneTodos]
        return sortedTodos
    }

    const addTodo = (todo) => {
        let updatedTodos = [...todos, todo]

        setTodos([...sortTodos(updatedTodos)])
    }

    const deleteTodo = (id) => {
        let updatedTodos = todos.filter((todo) => todo.id !== id)

        setTodos([...sortTodos(updatedTodos)])
    }

    const doneTodoHandler = (id) => {
        let updatedTodos = [...todos]
        const index = getIndexById(id)

        updatedTodos[index].isDone = !updatedTodos[index].isDone

        setTodos([...sortTodos(updatedTodos)])
    }

    const editTodo = (id) => {
        const index = getIndexById(id);
        setInputText(todos[index].text);
        deleteTodo(id);
    };

    return (
        <div className={styles.task_list_box}>
            <h2>Pendentes ({notDoneCount})</h2>

            <TaskForm
                addTodo={addTodo}
                inputText={inputText}
            />

            {todos.map((todo) => (
                <TaskItem
                    key={todo.id}
                    todo={todo}
                    doneTodoHandler={doneTodoHandler}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    )
}