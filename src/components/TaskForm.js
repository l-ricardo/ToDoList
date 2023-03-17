import { useState } from "react";
import styles from "../styles/TaskItem.module.css";

export default function TaskForm({ todoHandler }) {

    const [text, setText] = useState("")
    const [id, setId] = useState(0)

    // Creates a new todo object and updates the id
    const newTodo = (text) => {
        const todo = {
            text: text,
            isDone: false,
            id: id
        }
        setId(id + 1)
        todoHandler(todo)
    }

    return (
        <div className={styles.task_item_box}>
            <input
                onChange={(e) => setText(e.target.value)}>
            </input>
            <button className={styles.add_button}
                onClick={() => newTodo(text)} >Adicionar novo
            </button>
        </div>)
}