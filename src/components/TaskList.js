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

    return (
        <div className={styles.task_list_box}>
            <h2>Pendentes</h2>
            <TaskForm addTodo={addTodo} />

            {todos.map((todo) => (
                <TaskItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}