// import ListHeader from "./ListHeader";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

import styles from "../styles/TaskList.module.css";
import { useState } from "react";


export default function TaskList() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const deleteTodo = (id) => {
        let remainingTodos = todos.filter((todo) => todo.id != id)
        setTodos(remainingTodos)
    }

    return (
        <div className={styles.task_list_box}>
            <h2>Pendentes ({todos.length})</h2>

            <TaskForm addTodo={addTodo} />

            {todos.map((todo) => (
                <TaskItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </div>
    )
}