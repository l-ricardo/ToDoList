import { useState } from "react";
import styles from "../styles/TaskItem.module.css";

export default function TaskForm() {
    const [text, setText] = useState()
    return (
        <div className={styles.task_item_box}>
            <input
                onChange={(e) => setText(e.target.value)}>
            </input>
            <button className={styles.add_button}
                onClick={() => console.log(text)} >Adicionar
            </button>
        </div>)
}