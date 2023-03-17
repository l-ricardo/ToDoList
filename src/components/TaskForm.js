import { useState } from "react";
import styles from "../styles/TaskItem.module.css";

export default function TaskForm({ addTodo }) {

    const [text, setText] = useState("")
    const [id, setId] = useState(0)

    // Creates a new todo object, updates the id and add it to the todos array
    const newTodo = (text) => {
        const todo = {
            text: text,
            isDone: false,
            id: id
        }
        setId(id + 1)
        addTodo(todo)
    }

    return (
        <div className={styles.task_item_box}>
            <input
                type="text"
                placeholder="Nova tarefa" 
                onChange={(e) => setText(e.target.value)}>
            </input>
            <button className={styles.add_button}
                onClick={() => newTodo(text)} >Adicionar novo
            </button>
        </div>)
}